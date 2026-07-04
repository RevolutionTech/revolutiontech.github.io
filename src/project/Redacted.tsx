import * as React from "react";

import REDACTED_RULES from "../assets/download/redacted-rules.pdf";
import REDACTED_SELL_SHEET_IMAGE from "../assets/img/redacted/redacted-sell-sheet.png";
import REDACTED_SELL_SHEET_PDF from "../assets/download/redacted-sell-sheet.pdf";
import { Platform, Project } from "./project";
import { SellSheet } from "./SellSheet";

export const PROJECT_REDACTED: Project = {
  name: "Redacted",
  slug: "redacted",
  visible: true,
  year: 2026,
  description: (
    <>
      Redacted is a co-operative party game. One player plays as a government
      whistleblower trying to expose classified secrets while all other players
      play as the public trying to uncover the conspiracy.
    </>
  ),
  platforms: [Platform.BOARD_GAME],
  minPlayers: 2,
  maxPlayers: 6,
  playtime: 15,
  minAge: 8,
  details: (
    <div>
      <h2>Pitch Video</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/G-oW5s3fTSQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h2>Sell Sheet</h2>
      <SellSheet
        sellSheetPdf={REDACTED_SELL_SHEET_PDF}
        sellSheetImage={REDACTED_SELL_SHEET_IMAGE}
      />
      <h2 style={{ marginBottom: 0 }}>Resources</h2>
    </div>
  ),
  showYearInProjectDetails: false,
  showPlatformsInProjectDetails: false,
  showScreenshotsInProjectDetails: false,
  additionalLinks: [
    {
      url: REDACTED_RULES,
      description: "Rulebook",
    },
  ],
};
