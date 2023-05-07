import { ProjectLinkType } from "./project";

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
