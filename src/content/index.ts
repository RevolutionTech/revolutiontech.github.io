import { attachProjectAssets } from "../project/projectAssets";
import type { SiteContent } from "../SiteContent";
import { EVERYTHING_INTRO, INTRO } from "./intro";
import { PROJECT_DEFINITIONS } from "./projects";

export const SCREENSHOT_URLS_BY_PATH = import.meta.glob<string>(
  "../assets/img/project/*/*.{jpg,png}",
  { eager: true, import: "default" },
);

export const DOWNLOAD_URLS_BY_PATH = import.meta.glob<string>(
  "../assets/download/*.{exe,zip,swf}",
  { eager: true, import: "default" },
);

export const SITE_CONTENT: SiteContent = {
  projects: attachProjectAssets(
    PROJECT_DEFINITIONS,
    SCREENSHOT_URLS_BY_PATH,
    DOWNLOAD_URLS_BY_PATH,
  ),
  intro: INTRO,
  everythingIntro: EVERYTHING_INTRO,
};
