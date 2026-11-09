import { expect, type Page, test } from "@playwright/test";

const projectCards = (page: Page) => page.getByTestId("project-card");
const projectCard = (page: Page, href: string) =>
  projectCards(page).and(page.locator(`[href="${href}"]`));
const projectTitle = (page: Page) => page.getByTestId("project-title");

const projectHrefs = async (page: Page, path: string): Promise<string[]> => {
  await page.goto(path);
  await expect(projectCards(page).first()).toBeVisible();
  const hrefs = await projectCards(page).evaluateAll((links) =>
    links.map((link) => link.getAttribute("href") ?? ""),
  );
  return hrefs;
};

test.beforeEach(async ({ page, baseURL }) => {
  // Keep the tests independent of third-party services (fonts, analytics,
  // video embeds).
  await page.route("**/*", (route) =>
    route.request().url().startsWith(baseURL!)
      ? route.continue()
      : route.abort(),
  );
});

test("opening a project card shows that project's details page", async ({
  page,
}) => {
  await page.goto("/");
  const firstCard = projectCards(page).first();
  const cardTitle =
    (await firstCard.getByTestId("project-card-title").textContent()) ?? "";
  const cardHref = await firstCard.getAttribute("href");

  await firstCard.click();

  await expect(page).toHaveURL(cardHref!);
  const detailsTitle = (await projectTitle(page).textContent()) ?? "";
  expect(cardTitle.startsWith(detailsTitle)).toBe(true);
});

test("the everything page lists every project on the home page and more", async ({
  page,
}) => {
  const homeHrefs = await projectHrefs(page, "/");
  const everythingHrefs = await projectHrefs(page, "/everything");

  expect(everythingHrefs).toEqual(expect.arrayContaining(homeHrefs));
  expect(everythingHrefs.length).toBeGreaterThan(homeHrefs.length);
});

test("the header title returns to the home page", async ({ page }) => {
  const [href] = await projectHrefs(page, "/everything");
  await page.goto(href);

  await page.getByRole("link", { name: "Revolution Technologies" }).click();

  await expect(page).toHaveURL("/");
  await expect(projectCards(page).first()).toBeVisible();
});

test("a direct link to a project page loads that page", async ({ page }) => {
  const [href] = await projectHrefs(page, "/");

  await page.goto(href);

  await expect(page).toHaveURL(href);
  await expect(projectTitle(page)).toBeVisible();
  await expect(page.getByText("404 Not Found!")).toHaveCount(0);
});

test("a direct link keeps its query string and hash", async ({ page }) => {
  const [href] = await projectHrefs(page, "/");

  await page.goto(`${href}?a=1&b=2#top`);

  await expect(page).toHaveURL(`${href}?a=1&b=2#top`);
  await expect(projectTitle(page)).toBeVisible();
});

test("an unknown page shows the not found page", async ({ page }) => {
  await page.goto("/this/page/does-not-exist");

  await expect(
    page.getByRole("heading", { name: "404 Not Found!" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Home page" }).click();
  await expect(page).toHaveURL("/");
});

test("the screenshot carousel moves to the next and previous screenshot", async ({
  page,
}) => {
  const hrefs = await projectHrefs(page, "/everything");
  const nextButton = page.getByRole("button", { name: "Next screenshot" });
  let hrefWithCarousel: string | undefined;
  for (const href of hrefs) {
    await page.goto(href);
    await expect(projectTitle(page)).toBeVisible();
    if ((await nextButton.count()) > 0) {
      hrefWithCarousel = href;
      break;
    }
  }
  expect(
    hrefWithCarousel,
    "no project has two or more screenshots",
  ).toBeTruthy();

  const firstSlide = page.getByTestId("screenshot-slide").first();
  const startX = (await firstSlide.boundingBox())!.x;

  await nextButton.click();
  await expect
    .poll(async () => (await firstSlide.boundingBox())!.x)
    .toBeLessThan(startX);

  await page.getByRole("button", { name: "Previous screenshot" }).click();
  await expect
    .poll(async () => (await firstSlide.boundingBox())!.x)
    .toBeCloseTo(startX, 0);
});

test("every project page renders with working images and files", async ({
  page,
  request,
  baseURL,
}) => {
  test.slow();
  const hrefs = await projectHrefs(page, "/everything");
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    // Aborted third-party requests log a resource error; those are expected.
    if (
      message.type() === "error" &&
      !message.text().includes("net::ERR_FAILED")
    ) {
      consoleErrors.push(`${page.url()}: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) =>
    consoleErrors.push(`${page.url()}: ${error.message}`),
  );

  const assetUrls = new Set<string>();
  // Pages open by a click, not by page.goto: a direct load of a deep link
  // starts with the expected 404 response from the GitHub Pages redirect.
  for (const href of hrefs) {
    await projectCard(page, href).click();
    await expect(page).toHaveURL(href);
    await expect(projectTitle(page)).toBeVisible();
    await expect(page.getByText("404 Not Found!")).toHaveCount(0);

    const urls = await page.evaluate(() => [
      ...Array.from(
        document.images,
        (image) => image.getAttribute("src") ?? "",
      ),
      ...Array.from(document.links, (link) => link.getAttribute("href") ?? ""),
    ]);
    for (const url of urls) {
      expect(url, `inlined asset on ${href}`).not.toMatch(/^data:/);
      const absoluteUrl = new URL(url, baseURL).href;
      if (absoluteUrl.startsWith(baseURL!) && !url.startsWith("/project/")) {
        assetUrls.add(absoluteUrl);
      }
    }
    await page.goBack();
  }

  for (const url of assetUrls) {
    const response = await request.get(url);
    expect(response.status(), url).toBe(200);
  }
  expect(consoleErrors).toEqual([]);
});
