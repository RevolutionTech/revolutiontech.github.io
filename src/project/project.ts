import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faApple,
  faLinux,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

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

export enum ProjectLinkType {
  DOWNLOAD,
  EXTERNAL,
  SOURCE,
}

export const projectLinkDefaultCopy = (
  projectName: string,
  linkType: ProjectLinkType
) => {
  switch (linkType) {
    case ProjectLinkType.DOWNLOAD:
      return `Download ${projectName}`;
    case ProjectLinkType.EXTERNAL:
      return `Try ${projectName}`;
    case ProjectLinkType.SOURCE:
      return "View Source Code";
  }
};

type ProjectLink = {
  type: ProjectLinkType;
  url: string;
  description?: string;
};

export type Project = {
  name: string;
  slug: string;
  year: number;
  description: React.ReactNode;
  platforms: Platform[];
  minPlayers?: number;
  maxPlayers?: number;
  screenshots: string[];
  links: ProjectLink[];
};
