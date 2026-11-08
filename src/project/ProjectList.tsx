import { PROJECT_LIST } from "./AllProjects";
import styles from "./ProjectList.module.css";
import { ProjectPreviewCard } from "./ProjectPreviewCard";

interface ProjectListProps {
  everything?: boolean;
}

export const ProjectList = (props: ProjectListProps) => (
  <div className={styles.projectList}>
    {PROJECT_LIST.filter((project) => props.everything || project.visible).map(
      (project) => (
        <ProjectPreviewCard key={project.slug} project={project} />
      ),
    )}
  </div>
);
