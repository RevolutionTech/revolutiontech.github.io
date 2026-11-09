import { faBirthdayCake, faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

import { PlatformList } from "./PlatformList";
import { PlayerCount } from "./PlayerCount";
import styles from "./ProjectPreviewCard.module.css";
import { ProjectScreenshot } from "./ProjectScreenshot";
import type { Project } from "./project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectPreviewCard = ({ project }: ProjectCardProps) => {
  const { screenshots } = project;
  const screenshot =
    screenshots[Math.floor(Math.random() * screenshots.length)];
  return (
    <Link
      className={styles.card}
      to={`/project/${project.slug}`}
      data-testid="project-card"
    >
      <div className={styles.screenshot}>
        {screenshot && (
          <ProjectScreenshot url={screenshot.url} alt={project.name} />
        )}
      </div>
      <div>
        <h3 className={styles.title} data-testid="project-card-title">
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
                label="Players"
              />
            </div>
            {project.playtime && (
              <div>
                <FontAwesomeIcon icon={faHourglass} aria-label="Playtime" />{" "}
                {project.playtime}m
              </div>
            )}
            {project.minAge && (
              <div>
                <FontAwesomeIcon
                  icon={faBirthdayCake}
                  aria-label="Minimum age"
                />{" "}
                {project.minAge}+
              </div>
            )}
          </div>
        </h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
};
