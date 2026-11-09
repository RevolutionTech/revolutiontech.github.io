import type { Project } from "./project/project";

export type SiteContent = {
  projects: Project[];
  /** Introduction on the home page. */
  intro: React.ReactNode;
  /** Introduction on the page that also lists hidden projects. */
  everythingIntro: React.ReactNode;
};
