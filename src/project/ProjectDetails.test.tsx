import { screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { makeProject, renderSite } from "../test/renderSite";
import { PitchVideo } from "./PitchVideo";
import { Platform } from "./project";
import { SellSheet } from "./SellSheet";

const renderDetails = (overrides: Parameters<typeof makeProject>[0]) =>
  renderSite("/project/test-project", [
    makeProject({ slug: "test-project", ...overrides }),
  ]);

const pageTitle = () => screen.getByRole("heading", { level: 1 });

describe("title", () => {
  test("shows the name and year", () => {
    renderDetails({ name: "Card Game", year: 2020 });

    expect(pageTitle()).toHaveTextContent("Card Game (2020)");
  });

  test("hides the year when the project asks", () => {
    renderDetails({
      name: "Card Game",
      year: 2020,
      showYearInProjectDetails: false,
    });

    expect(pageTitle()).toHaveTextContent(/^Card Game$/);
  });

  test("shows only the name when the project has no year", () => {
    renderDetails({ name: "Card Game", year: undefined });

    expect(pageTitle()).toHaveTextContent(/^Card Game$/);
  });
});

describe("platforms", () => {
  test("shows each platform by name", () => {
    renderDetails({ platforms: [Platform.LINUX, Platform.ANDROID] });

    expect(screen.getByText("Linux")).toBeInTheDocument();
    expect(screen.getByText("Android")).toBeInTheDocument();
  });

  test("hides the platforms when the project asks", () => {
    renderDetails({
      platforms: [Platform.LINUX],
      showPlatformsInProjectDetails: false,
    });

    expect(screen.queryByText("Linux")).not.toBeInTheDocument();
  });
});

describe("player count", () => {
  test("shows a range of players", () => {
    renderDetails({ minPlayers: 2, maxPlayers: 6 });

    expect(screen.getByText(/2-6\s+Players/)).toBeInTheDocument();
  });

  test("shows a minimum number of players", () => {
    renderDetails({ minPlayers: 3 });

    expect(screen.getByText(/3\+\s+Players/)).toBeInTheDocument();
  });

  test("uses the singular for one player", () => {
    renderDetails({ minPlayers: 1, maxPlayers: 1 });

    expect(screen.getByText(/1\s+Player$/)).toBeInTheDocument();
  });

  test("is left out when the project has none", () => {
    renderDetails({});

    expect(screen.queryByText(/Player/)).not.toBeInTheDocument();
  });
});

describe("playtime and age", () => {
  test("shows the playtime and minimum age", () => {
    renderDetails({ playtime: 45, minAge: 10 });

    expect(screen.getByText("45 Mins")).toBeInTheDocument();
    expect(screen.getByText("Ages 10+")).toBeInTheDocument();
  });

  test("are left out when the project has none", () => {
    renderDetails({});

    expect(screen.queryByText(/Mins/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Ages/)).not.toBeInTheDocument();
  });
});

describe("screenshots", () => {
  test("shows every screenshot with its caption", () => {
    renderDetails({
      screenshots: [
        { url: "/title.png", caption: "Title screen" },
        { url: "/level.png", caption: "First level" },
      ],
    });

    const carousel = screen.getByRole("region", { name: "Screenshots" });
    expect(within(carousel).getByAltText("Title screen")).toHaveAttribute(
      "src",
      "/title.png",
    );
    expect(within(carousel).getByAltText("First level")).toHaveAttribute(
      "src",
      "/level.png",
    );
    expect(within(carousel).getByText("Title screen")).toBeInTheDocument();
    expect(within(carousel).getByText("First level")).toBeInTheDocument();
  });

  test("shows previous and next buttons for more than one screenshot", () => {
    renderDetails({ screenshots: [{ url: "/one.png" }, { url: "/two.png" }] });

    expect(
      screen.getByRole("button", { name: "Previous screenshot" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Next screenshot" }),
    ).toBeInTheDocument();
  });

  test("shows no buttons for one screenshot", () => {
    renderDetails({ screenshots: [{ url: "/one.png" }] });

    expect(screen.getByRole("region", { name: "Screenshots" })).toBeVisible();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  test("are hidden when the project asks", () => {
    renderDetails({
      screenshots: [{ url: "/one.png" }],
      showScreenshotsInProjectDetails: false,
    });

    expect(
      screen.queryByRole("region", { name: "Screenshots" }),
    ).not.toBeInTheDocument();
  });
});

describe("description and details", () => {
  test("shows the description and the extra details", () => {
    renderDetails({
      description: "Match the cards.",
      details: <h2>How to play</h2>,
    });

    expect(screen.getByText("Match the cards.")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "How to play" }),
    ).toBeInTheDocument();
  });

  test("can contain a pitch video", () => {
    renderDetails({
      details: <PitchVideo videoUrl="https://video.test/embed/1" />,
    });

    expect(screen.getByTitle("YouTube video player")).toHaveAttribute(
      "src",
      "https://video.test/embed/1",
    );
  });

  test("can contain a sell sheet that links to its PDF", () => {
    renderDetails({
      details: (
        <SellSheet
          projectName="Card Game"
          sellSheetPdf="/sell-sheet.pdf"
          sellSheetImage="/sell-sheet.png"
        />
      ),
    });

    const image = screen.getByAltText("Card Game sell sheet");
    expect(image).toHaveAttribute("src", "/sell-sheet.png");
    const link = image.closest("a");
    expect(link).toHaveAttribute("href", "/sell-sheet.pdf");
    expect(link).toHaveAttribute("target", "_blank");
  });
});

describe("buttons", () => {
  test("offer the download as the primary button", () => {
    renderDetails({
      name: "Card Game",
      downloadUrl: "/card-game.zip",
      additionalLinks: [{ url: "https://source.test/", description: "Source" }],
    });

    const download = screen.getByRole("link", { name: "Download Card Game" });
    expect(download).toHaveAttribute("href", "/card-game.zip");
    expect(download).toHaveClass("primaryButton");
    expect(screen.getByRole("link", { name: "Source" })).not.toHaveClass(
      "primaryButton",
    );
  });

  test("make the first link primary when there is no download", () => {
    renderDetails({
      additionalLinks: [
        { url: "https://play.test/", description: "Play" },
        { url: "https://source.test/", description: "Source" },
      ],
    });

    expect(screen.queryByRole("link", { name: /Download/ })).toBeNull();
    expect(screen.getByRole("link", { name: "Play" })).toHaveClass(
      "primaryButton",
    );
    expect(screen.getByRole("link", { name: "Source" })).not.toHaveClass(
      "primaryButton",
    );
  });

  test("open links in a new tab", () => {
    renderDetails({
      additionalLinks: [{ url: "https://play.test/", description: "Play" }],
    });

    const link = screen.getByRole("link", { name: "Play" });
    expect(link).toHaveAttribute("href", "https://play.test/");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener");
  });
});
