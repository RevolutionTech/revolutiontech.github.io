import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAndroid,
  faApple,
  faLinux,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud, faDice } from "@fortawesome/free-solid-svg-icons";

const fileStem = (path: string) => (path.split("/").pop() ?? "").split(".")[0];

const DOWNLOAD_URLS_BY_SLUG = Object.fromEntries(
  Object.entries(
    import.meta.glob<string>("../assets/download/*.{exe,zip,swf}", {
      eager: true,
      import: "default",
    }),
  ).map(([path, url]) => [fileStem(path), url]),
);

const SCREENSHOT_URLS_BY_PATH = import.meta.glob<string>(
  "../assets/img/project/*/*.{jpg,png}",
  { eager: true, import: "default" },
);

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

export const projectScreenshots = (project: Project) =>
  Object.entries(SCREENSHOT_URLS_BY_PATH)
    .filter(([path]) => path.split("/").at(-2) === project.slug)
    .map(([path, url]) => ({
      url,
      caption: project.screenshotCaptions?.[fileStem(path)],
    }));

export const projectDownload = (projectSlug: string): string | undefined =>
  DOWNLOAD_URLS_BY_SLUG[projectSlug];

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
  playtime?: number;
  minAge?: number;
  showYearInProjectDetails?: boolean;
  showPlatformsInProjectDetails?: boolean;
  showScreenshotsInProjectDetails?: boolean;
  screenshotCaptions?: Record<string, string>;
  additionalLinks?: ProjectLink[];
};
