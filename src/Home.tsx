import { Intro } from "./Intro";
import { ProjectList } from "./project/ProjectList";
import type { Project } from "./project/project";

interface HomeProps {
  projects: Project[];
  everything?: boolean;
}

export const Home = (props: HomeProps) => (
  <>
    <Intro everything={props.everything} />
    <ProjectList projects={props.projects} everything={props.everything} />
  </>
);
