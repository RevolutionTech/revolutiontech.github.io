import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAndroid,
  faApple,
  faLinux,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud, faDice } from "@fortawesome/free-solid-svg-icons";

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

type ProjectLink = {
  url: string;
  description: string;
};

export type Screenshot = {
  url: string;
  caption?: string;
};

/** A project as written in the site content, before its assets are found. */
export type ProjectDefinition = {
  name: string;
  slug: string;
  visible: boolean;
  year?: number;
  description: React.ReactNode;
  details?: React.ReactNode;
  platforms: Platform[];
  minPlayers?: number;
  maxPlayers?: number;
  playtime?: number;
  minAge?: number;
  showYearInProjectDetails?: boolean;
  showPlatformsInProjectDetails?: boolean;
  showScreenshotsInProjectDetails?: boolean;
  screenshotCaptions?: Record<string, string>;
  additionalLinks?: ProjectLink[];
};

export type Project = ProjectDefinition & {
  screenshots: Screenshot[];
  downloadUrl?: string;
};
