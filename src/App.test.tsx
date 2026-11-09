import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { makeProject, renderSite } from "./test/renderSite";

describe("not found page", () => {
  test("shows for an unknown path", () => {
    renderSite("/no/such/page");

    expect(
      screen.getByRole("heading", { name: "404 Not Found!" }),
    ).toBeInTheDocument();
  });

  test("shows for an unknown project", () => {
    renderSite("/project/no-such-project", [makeProject({ slug: "real" })]);

    expect(
      screen.getByRole("heading", { name: "404 Not Found!" }),
    ).toBeInTheDocument();
  });

  test("links back to the home page", async () => {
    renderSite("/no/such/page", [makeProject({ name: "Card Game" })]);

    await userEvent.click(screen.getByRole("link", { name: "Home page" }));

    expect(window.location.pathname).toBe("/");
    expect(screen.getByRole("link", { name: /Card Game/ })).toBeInTheDocument();
  });
});

describe("header", () => {
  test("site title returns to the home page", async () => {
    renderSite("/project/test-project", [makeProject({ name: "Card Game" })]);

    await userEvent.click(
      screen.getByRole("link", { name: "Revolution Technologies" }),
    );

    expect(window.location.pathname).toBe("/");
    expect(screen.getByRole("link", { name: /Card Game/ })).toBeInTheDocument();
  });
});

describe("header and footer", () => {
  test.each(["/", "/everything", "/project/test-project", "/missing"])(
    "show on %s",
    (path) => {
      renderSite(path, [makeProject()]);

      expect(screen.getByRole("banner")).toBeInTheDocument();
      expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    },
  );

  test("footer links to the source code of the site", () => {
    renderSite("/");

    expect(
      within(screen.getByRole("contentinfo")).getByRole("link", {
        name: "View this site on GitHub",
      }),
    ).toHaveAttribute(
      "href",
      "https://github.com/RevolutionTech/revolutiontech.github.io",
    );
  });

  test("external links open in a new tab", () => {
    renderSite("/");

    const externalLinks = [
      ...within(screen.getByRole("banner")).getAllByRole("link"),
      ...within(screen.getByRole("contentinfo")).getAllByRole("link"),
    ].filter((link) => link.getAttribute("href")?.startsWith("http"));

    expect(externalLinks.length).toBeGreaterThan(0);
    for (const link of externalLinks) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener");
    }
  });
});
