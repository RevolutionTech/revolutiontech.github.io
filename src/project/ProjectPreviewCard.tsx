import { faBirthdayCake, faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

import { PlatformList } from "./PlatformList";
import { PlayerCount } from "./PlayerCount";
import styles from "./ProjectPreviewCard.module.css";
import { ProjectScreenshot } from "./ProjectScreenshot";
import { type Project, projectScreenshots } from "./project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectPreviewCard = ({ project }: ProjectCardProps) => {
  const screenshots = projectScreenshots(project);
  const screenshot =
    screenshots[Math.floor(Math.random() * screenshots.length)];
  return (
    <Link className={styles.card} to={`/project/${project.slug}`}>
      <div className={styles.screenshot}>
        {screenshot && (
          <ProjectScreenshot url={screenshot.url} alt={project.name} />
        )}
      </div>
      <div>
        <h3 className={styles.title}>
          <div>
            {project.name}
            {project.year && ` (${project.year})`}
            &nbsp;
          </div>
          <PlatformList platforms={project.platforms} />
          <div className={styles.facts}>
            <div>
              <PlayerCount
                minPlayers={project.minPlayers}
                maxPlayers={project.maxPlayers}
              />
            </div>
            {project.playtime && (
              <div>
                <FontAwesomeIcon icon={faHourglass} /> {project.playtime}m
              </div>
            )}
            {project.minAge && (
              <div>
                <FontAwesomeIcon icon={faBirthdayCake} /> {project.minAge}+
              </div>
            )}
          </div>
        </h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
};
