import { fireEvent, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { Platform } from "./project/project";
import {
  makeProject,
  renderSite,
  TEST_EVERYTHING_INTRO,
  TEST_INTRO,
} from "./test/renderSite";

const projectCard = (name: string) =>
  screen.getByRole("link", { name: new RegExp(name) });

describe("home page", () => {
  test("shows the intro and only visible projects", () => {
    renderSite("/", [
      makeProject({ name: "Shown Project", slug: "shown", visible: true }),
      makeProject({ name: "Hidden Project", slug: "hidden", visible: false }),
    ]);

    expect(screen.getByText(TEST_INTRO)).toBeInTheDocument();
    expect(screen.queryByText(TEST_EVERYTHING_INTRO)).not.toBeInTheDocument();
    expect(projectCard("Shown Project")).toBeInTheDocument();
    expect(screen.queryByText(/Hidden Project/)).not.toBeInTheDocument();
  });
});

describe("everything page", () => {
  test("shows its own intro and all projects", () => {
    renderSite("/everything", [
      makeProject({ name: "Shown Project", slug: "shown", visible: true }),
      makeProject({ name: "Hidden Project", slug: "hidden", visible: false }),
    ]);

    expect(screen.getByText(TEST_EVERYTHING_INTRO)).toBeInTheDocument();
    expect(screen.queryByText(TEST_INTRO)).not.toBeInTheDocument();
    expect(projectCard("Shown Project")).toBeInTheDocument();
    expect(projectCard("Hidden Project")).toBeInTheDocument();
  });
});

describe("project card", () => {
  test("opens the project's details page", async () => {
    renderSite("/", [makeProject({ name: "Card Game", slug: "card-game" })]);

    await userEvent.click(projectCard("Card Game"));

    expect(window.location.pathname).toBe("/project/card-game");
    expect(
      screen.getByRole("heading", { level: 1, name: "Card Game" }),
    ).toBeInTheDocument();
  });

  test("shows the name, year, and description", () => {
    renderSite("/", [
      makeProject({
        name: "Card Game",
        year: 2020,
        description: "Match the cards.",
      }),
    ]);

    const card = projectCard("Card Game");
    expect(within(card).getByText(/Card Game \(2020\)/)).toBeInTheDocument();
    expect(within(card).getByText("Match the cards.")).toBeInTheDocument();
  });

  test("leaves out the year when the project has none", () => {
    renderSite("/", [makeProject({ name: "Card Game", year: undefined })]);

    expect(within(projectCard("Card Game")).queryByText(/\(/)).toBeNull();
  });

  test("names each platform icon", () => {
    renderSite("/", [
      makeProject({
        name: "Card Game",
        platforms: [Platform.WINDOWS, Platform.MACOS],
      }),
    ]);

    const card = projectCard("Card Game");
    expect(
      within(card).getByRole("img", { name: "Windows" }),
    ).toBeInTheDocument();
    expect(
      within(card).getByRole("img", { name: "macOS" }),
    ).toBeInTheDocument();
  });

  test("shows a player range", () => {
    renderSite("/", [
      makeProject({ name: "Card Game", minPlayers: 2, maxPlayers: 6 }),
    ]);

    const card = projectCard("Card Game");
    expect(within(card).getByRole("img", { name: "Players" })).toBeVisible();
    expect(within(card).getByText("2-6")).toBeInTheDocument();
  });

  test("shows a minimum player count with no maximum", () => {
    renderSite("/", [makeProject({ name: "Card Game", minPlayers: 3 })]);

    expect(
      within(projectCard("Card Game")).getByText("3+"),
    ).toBeInTheDocument();
  });

  test("shows one player count when the minimum equals the maximum", () => {
    renderSite("/", [
      makeProject({ name: "Card Game", minPlayers: 1, maxPlayers: 1 }),
    ]);

    expect(within(projectCard("Card Game")).getByText("1")).toBeInTheDocument();
  });

  test("shows no player count when the project has none", () => {
    renderSite("/", [makeProject({ name: "Card Game" })]);

    expect(
      within(projectCard("Card Game")).queryByRole("img", { name: "Players" }),
    ).not.toBeInTheDocument();
  });

  test("shows the playtime and minimum age", () => {
    renderSite("/", [
      makeProject({ name: "Card Game", playtime: 30, minAge: 12 }),
    ]);

    const card = projectCard("Card Game");
    expect(
      within(card).getByRole("img", { name: "Playtime" }),
    ).toBeInTheDocument();
    expect(within(card).getByText("30m")).toBeInTheDocument();
    expect(
      within(card).getByRole("img", { name: "Minimum age" }),
    ).toBeInTheDocument();
    expect(within(card).getByText("12+")).toBeInTheDocument();
  });

  test("shows no playtime or minimum age when the project has none", () => {
    renderSite("/", [makeProject({ name: "Card Game" })]);

    const card = projectCard("Card Game");
    expect(
      within(card).queryByRole("img", { name: "Playtime" }),
    ).not.toBeInTheDocument();
    expect(
      within(card).queryByRole("img", { name: "Minimum age" }),
    ).not.toBeInTheDocument();
  });

  test("shows one of the project's screenshots", () => {
    const screenshotUrls = ["/first.png", "/second.png"];
    renderSite("/", [
      makeProject({
        name: "Card Game",
        screenshots: screenshotUrls.map((url) => ({ url })),
      }),
    ]);

    const screenshot = within(projectCard("Card Game")).getByAltText(
      "Card Game",
    );
    expect(screenshotUrls).toContain(screenshot.getAttribute("src"));
  });

  test("marks the screenshot as busy until it loads", () => {
    renderSite("/", [
      makeProject({ name: "Card Game", screenshots: [{ url: "/shot.png" }] }),
    ]);
    const screenshot = within(projectCard("Card Game")).getByAltText(
      "Card Game",
    );
    expect(screenshot).toHaveAttribute("aria-busy", "true");

    fireEvent.load(screenshot);

    expect(screenshot).toHaveAttribute("aria-busy", "false");
  });

  test("shows no screenshot when the project has none", () => {
    renderSite("/", [makeProject({ name: "Card Game", screenshots: [] })]);

    expect(
      within(projectCard("Card Game")).queryByAltText("Card Game"),
    ).not.toBeInTheDocument();
  });
});
