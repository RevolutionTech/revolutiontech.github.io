import { expect, test } from "vitest";
import {
  DOWNLOAD_URLS_BY_PATH,
  SCREENSHOT_URLS_BY_PATH,
  SITE_CONTENT,
} from ".";

// These tests check that the site content is consistent. They do not check
// any specific project.

const { projects } = SITE_CONTENT;
const slugs = projects.map(({ slug }) => slug);
const fileStem = (path: string) => (path.split("/").pop() ?? "").split(".")[0];

test("every project has a unique slug", () => {
  expect(new Set(slugs).size).toBe(slugs.length);
});

test("every slug is safe to use in a URL", () => {
  for (const slug of slugs) {
    expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  }
});

test("no project has more minimum players than maximum players", () => {
  const projectsWithBoth = projects.filter(
    ({ minPlayers, maxPlayers }) =>
      minPlayers !== undefined && maxPlayers !== undefined,
  );
  for (const { slug, minPlayers, maxPlayers } of projectsWithBoth) {
    expect(minPlayers, slug).toBeLessThanOrEqual(maxPlayers!);
  }
});

test("every screenshot folder belongs to a project", () => {
  const folders = new Set(
    Object.keys(SCREENSHOT_URLS_BY_PATH).map((path) => path.split("/").at(-2)),
  );

  expect([...folders].filter((folder) => !slugs.includes(folder!))).toEqual([]);
});

test("every download belongs to a project", () => {
  const downloadStems = Object.keys(DOWNLOAD_URLS_BY_PATH).map(fileStem);

  expect(downloadStems.filter((stem) => !slugs.includes(stem))).toEqual([]);
});

test("every screenshot caption belongs to a screenshot", () => {
  for (const { slug, screenshots, screenshotCaptions = {} } of projects) {
    const captionCount = screenshots.filter(({ caption }) => caption).length;
    expect(captionCount, slug).toBe(Object.keys(screenshotCaptions).length);
  }
});
