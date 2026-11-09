import { render } from "@testing-library/react";
import App from "../App";
import { Platform, type Project } from "../project/project";
import type { SiteContent } from "../SiteContent";

export const TEST_INTRO = "Welcome to the test site.";
export const TEST_EVERYTHING_INTRO = "This test page lists every project.";

export const makeProject = (overrides: Partial<Project> = {}): Project => ({
  name: "Test Project",
  slug: "test-project",
  visible: true,
  description: "A project used in tests.",
  platforms: [Platform.WEB],
  screenshots: [],
  ...overrides,
});

export const renderSite = (path: string, projects: Project[] = []) => {
  const content: SiteContent = {
    projects,
    intro: TEST_INTRO,
    everythingIntro: TEST_EVERYTHING_INTRO,
  };
  window.history.pushState({}, "", path);
  return render(<App content={content} />);
};
