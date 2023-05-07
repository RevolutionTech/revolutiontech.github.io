import * as React from "react";
import keyBy from "lodash/keyBy";

import { Platform, Project } from "./project";

export const PROJECT_LIST: Project[] = [
  {
    name: "Letter Joy",
    slug: "letter-joy",
    year: 2022,
    description: (
      <>
        Letter Joy is a cooperative word deduction game inspired by the board
        game{" "}
        <a href="https://czechgames.com/en/letter-jam/" target="_blank">
          Letter Jam
        </a>{" "}
        designed by{" "}
        <a
          href="https://boardgamegeek.com/boardgamedesigner/116183/ondra-skoupy"
          target="_blank"
        >
          Ondra Skoup&#xfd;
        </a>{" "}
        and published by{" "}
        <a href="https://czechgames.com/" target="_blank">
          Czech Games Edition
        </a>
        . Players will ultimately need to form a secret word from the letters
        they are dealt without ever looking at the letters they have. Players do
        this by interpreting clues given to them by other players.
      </>
    ),
    platforms: [Platform.WEB],
    minPlayers: 2,
    maxPlayers: 6,
    additionalLinks: [
      {
        url: "https://letterjoy.revolutiontech.ca/",
        description: "Play Letter Joy",
      },
      {
        url: "https://github.com/RevolutionTech/letter-joy",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "PerDiem",
    slug: "perdiem",
    year: 2016,
    description: (
      <>
        PerDiem is an equity crowdfunding platform for musicians. Artists can
        raise money for projects by giving back a percentage of their revenue to
        the investors that fund them. Perdiem is the brainchild of Brandon
        Nelson; I created the backend of the website.
      </>
    ),
    platforms: [Platform.WEB, Platform.LINUX],
    additionalLinks: [
      {
        url: "https://github.com/RevolutionTech/perdiem-django",
        description: "View Source Code",
      },
    ],
  },
  {
    name: "Esprit's Labyrinth",
    slug: "esprits-labyrinth",
    year: 2010,
    description: (
      <>
        Esprit&apos;s Labyrinth is an action-packed adventure of a man and his
        ambitious companion. Esprit&apos;s Labyrinth is packed with amusing
        puzzles, bloodthirsty monsters, and a plot-twisting storyline.
        Esprit&apos;s Labyrinth was created as an Independent Study Unit project
        in my grade 12 Communications Technology class and won first place in
        the Interactive Game category of the &apos;10 Cawthra Animation
        Festival.
      </>
    ),
    platforms: [Platform.WINDOWS],
    minPlayers: 1,
    maxPlayers: 1,
    additionalLinks: [
      {
        url: "https://www.youtube.com/watch?v=8udWR2oizvs",
        description: "Watch the Trailer",
      },
    ],
  },
];
export const PROJECT_MAP = keyBy(PROJECT_LIST, "slug");
