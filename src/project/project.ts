import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
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
}

export const PLATFORM_TO_NAME: Record<Platform, string> = {
  [Platform.WEB]: "Web",
  [Platform.WINDOWS]: "Windows",
  [Platform.MACOS]: "macOS",
  [Platform.LINUX]: "Linux",
  [Platform.ANDROID]: "Android",
};
export const PLATFORM_TO_FA_ICON: Record<Platform, IconDefinition> = {
  [Platform.WEB]: faCloud,
  [Platform.WINDOWS]: faWindows,
  [Platform.MACOS]: faApple,
  [Platform.LINUX]: faLinux,
  [Platform.ANDROID]: faAndroid,
};

export const projectScreenshots = (projectSlug: string) => [
  ...Object.values(
    (JPG_SCREENSHOTS as Record<string, string[]>)[projectSlug] ?? {}
  ),
  ...Object.values(
    (PNG_SCREENSHOTS as Record<string, string[]>)[projectSlug] ?? {}
  ),
];

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
  platforms: Platform[];
  minPlayers?: number;
  maxPlayers?: number;
  additionalLinks?: ProjectLink[];
};
