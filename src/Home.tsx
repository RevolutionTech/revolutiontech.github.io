import { Intro } from "./Intro";
import { ProjectList } from "./project/ProjectList";
import type { Project } from "./project/project";

interface HomeProps {
  intro: React.ReactNode;
  projects: Project[];
  everything?: boolean;
}

export const Home = (props: HomeProps) => (
  <>
    <Intro>{props.intro}</Intro>
    <ProjectList projects={props.projects} everything={props.everything} />
  </>
);
