import { expect, test } from "vitest";
import { Platform, type ProjectDefinition } from "./project";
import { attachProjectAssets } from "./projectAssets";

const definition = (
  overrides: Partial<ProjectDefinition>,
): ProjectDefinition => ({
  name: "Test Project",
  slug: "test-project",
  visible: true,
  description: "A project used in tests.",
  platforms: [Platform.WEB],
  ...overrides,
});

test("gives a project the screenshots in the folder named after its slug", () => {
  const [project] = attachProjectAssets(
    [definition({ slug: "maze" })],
    {
      "../assets/img/project/maze/start.png": "/maze-start.png",
      "../assets/img/project/maze/end.jpg": "/maze-end.jpg",
      "../assets/img/project/maze-3d/start.png": "/maze-3d-start.png",
    },
    {},
  );

  expect(project.screenshots.map(({ url }) => url)).toEqual([
    "/maze-start.png",
    "/maze-end.jpg",
  ]);
});

test("captions a screenshot by its file name", () => {
  const [project] = attachProjectAssets(
    [definition({ slug: "maze", screenshotCaptions: { start: "The start" } })],
    {
      "../assets/img/project/maze/start.png": "/maze-start.png",
      "../assets/img/project/maze/end.png": "/maze-end.png",
    },
    {},
  );

  expect(project.screenshots).toEqual([
    { url: "/maze-start.png", caption: "The start" },
    { url: "/maze-end.png", caption: undefined },
  ]);
});

test("gives a project no screenshots when its folder does not exist", () => {
  const [project] = attachProjectAssets(
    [definition({ slug: "maze" })],
    { "../assets/img/project/other/start.png": "/other-start.png" },
    {},
  );

  expect(project.screenshots).toEqual([]);
});

test("gives each project the download named after its slug", () => {
  const projects = attachProjectAssets(
    [definition({ slug: "maze" }), definition({ slug: "pong" })],
    {},
    {
      "../assets/download/maze.zip": "/maze.zip",
      "../assets/download/pong.exe": "/pong.exe",
    },
  );

  expect(projects.map(({ downloadUrl }) => downloadUrl)).toEqual([
    "/maze.zip",
    "/pong.exe",
  ]);
});

test("gives a project no download when no file matches its slug", () => {
  const [project] = attachProjectAssets(
    [definition({ slug: "maze" })],
    {},
    { "../assets/download/maze-3d.zip": "/maze-3d.zip" },
  );

  expect(project.downloadUrl).toBeUndefined();
});

test("keeps the project's own fields", () => {
  const [project] = attachProjectAssets(
    [definition({ name: "Maze", slug: "maze", year: 2005 })],
    {},
    {},
  );

  expect(project).toMatchObject({ name: "Maze", slug: "maze", year: 2005 });
});
