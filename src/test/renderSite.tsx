import { render } from "@testing-library/react";
import App from "../App";
import { Platform, type Project } from "../project/project";

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
  window.history.pushState({}, "", path);
  return render(<App projects={projects} />);
};
