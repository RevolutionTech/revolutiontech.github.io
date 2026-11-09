import type { Project } from "../project/project";
import { attachProjectAssets } from "../project/projectAssets";
import { PROJECT_DEFINITIONS } from "./projects";

export const SCREENSHOT_URLS_BY_PATH = import.meta.glob<string>(
  "../assets/img/project/*/*.{jpg,png}",
  { eager: true, import: "default" },
);

export const DOWNLOAD_URLS_BY_PATH = import.meta.glob<string>(
  "../assets/download/*.{exe,zip,swf}",
  { eager: true, import: "default" },
);

export const PROJECTS: Project[] = attachProjectAssets(
  PROJECT_DEFINITIONS,
  SCREENSHOT_URLS_BY_PATH,
  DOWNLOAD_URLS_BY_PATH,
);
