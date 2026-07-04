import * as React from "react";

import SEMANTIC_SORTING_RULES from "../assets/download/directionally-correct-rules.pdf";
import SEMANTIC_SORTING_SELL_SHEET_IMAGE from "../assets/img/semantic-sorting/directionally-correct-sell-sheet.png";
import SEMANTIC_SORTING_SELL_SHEET_PDF from "../assets/download/directionally-correct-sell-sheet.pdf";
import { Platform, Project } from "./project";
import { SellSheet } from "./SellSheet";

export const PROJECT_SEMANTIC_SORTING: Project = {
  name: "Directionally Correct",
  slug: "semantic-sorting",
  visible: false,
  year: 2026,
  description: (
    <>
      Directionally Correct is a co-operative word guessing party game. One
      player knows a secret word and must clue the other players by carefully
      arranging their guesses, bringing them closer and closer to the correct
      answer over the course of the game.
    </>
  ),
  platforms: [Platform.BOARD_GAME],
  minPlayers: 2,
  playtime: 20,
  minAge: 8,
  details: (
    <div>
      <h2>Sell Sheet</h2>
      <SellSheet
        sellSheetPdf={SEMANTIC_SORTING_SELL_SHEET_PDF}
        sellSheetImage={SEMANTIC_SORTING_SELL_SHEET_IMAGE}
      />
      <h2 style={{ marginBottom: 0 }}>Resources</h2>
    </div>
  ),
  showYearInProjectDetails: false,
  showPlatformsInProjectDetails: false,
  showScreenshotsInProjectDetails: false,
  additionalLinks: [
    {
      url: SEMANTIC_SORTING_RULES,
      description: "Rulebook",
    },
  ],
};
