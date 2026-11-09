import styles from "./ProjectList.module.css";
import { ProjectPreviewCard } from "./ProjectPreviewCard";
import type { Project } from "./project";

interface ProjectListProps {
  projects: Project[];
  everything?: boolean;
}

export const ProjectList = (props: ProjectListProps) => (
  <div className={styles.projectList}>
    {props.projects
      .filter((project) => props.everything || project.visible)
      .map((project) => (
        <ProjectPreviewCard key={project.slug} project={project} />
      ))}
  </div>
);
