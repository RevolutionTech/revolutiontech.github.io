import last from "lodash/last";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faCloud, faDice } from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faApple,
  faLinux,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

import EXE_DOWNLOADS from "../assets/download/*.exe";
import SWF_DOWNLOADS from "../assets/download/*.swf";
import ZIP_DOWNLOADS from "../assets/download/*.zip";
import JPG_SCREENSHOTS from "../assets/img/project/*/*.jpg";
import PNG_SCREENSHOTS from "../assets/img/project/*/*.png";

export enum Platform {
  WEB,
  WINDOWS,
  MACOS,
  LINUX,
  ANDROID,
  BOARD_GAME,
}

export const PLATFORM_TO_NAME: Record<Platform, string> = {
  [Platform.WEB]: "Web",
  [Platform.WINDOWS]: "Windows",
  [Platform.MACOS]: "macOS",
  [Platform.LINUX]: "Linux",
  [Platform.ANDROID]: "Android",
  [Platform.BOARD_GAME]: "Board Game",
};
export const PLATFORM_TO_FA_ICON: Record<Platform, IconDefinition> = {
  [Platform.WEB]: faCloud,
  [Platform.WINDOWS]: faWindows,
  [Platform.MACOS]: faApple,
  [Platform.LINUX]: faLinux,
  [Platform.ANDROID]: faAndroid,
  [Platform.BOARD_GAME]: faDice,
};

export const projectScreenshots = (project: Project) => {
  const screenshots = [
    ...Object.values(
      (JPG_SCREENSHOTS as Record<string, string[]>)[project.slug] ?? {}
    ),
    ...Object.values(
      (PNG_SCREENSHOTS as Record<string, string[]>)[project.slug] ?? {}
    ),
  ];
  return screenshots.map((url) => {
    const screenshotName = (last(url.split("/")) ?? "").split(".")[0];
    const caption = project.screenshotCaptions?.[screenshotName];
    return { url, caption };
  });
};

export const projectDownload = (projectSlug: string) =>
  (EXE_DOWNLOADS as Record<string, string>)[projectSlug] ??
  (ZIP_DOWNLOADS as Record<string, string>)[projectSlug] ??
  (SWF_DOWNLOADS as Record<string, string>)[projectSlug];

type ProjectLink = {
  url: string;
  description: string;
};

export type Project = {
  name: string;
  slug: string;
  visible: boolean;
  year?: number;
  description: React.ReactNode;
  details?: React.ReactNode;
  platforms: Platform[];
  minPlayers?: number;
  maxPlayers?: number;
  screenshotCaptions?: Record<string, string>;
  additionalLinks?: ProjectLink[];
};
