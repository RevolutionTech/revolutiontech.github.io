import REDACTED_RULES from "../assets/download/redacted-rules.pdf";
import REDACTED_SELL_SHEET_PDF from "../assets/download/redacted-sell-sheet.pdf";
import REDACTED_SELL_SHEET_IMAGE from "../assets/img/redacted/redacted-sell-sheet.png";
import { PitchVideo } from "../project/PitchVideo";
import { Platform, type ProjectDefinition } from "../project/project";
import { SellSheet } from "../project/SellSheet";

export const PROJECT_REDACTED: ProjectDefinition = {
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
      <PitchVideo videoUrl="https://www.youtube.com/embed/G-oW5s3fTSQ" />
      <h2>Sell Sheet</h2>
      <SellSheet
        projectName="Redacted"
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
