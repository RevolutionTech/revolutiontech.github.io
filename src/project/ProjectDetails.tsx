import { faBirthdayCake, faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";

import { NotFound } from "../nav/NotFound";
import { PlatformList } from "./PlatformList";
import { PlayerCount } from "./PlayerCount";
import styles from "./ProjectDetails.module.css";
import type { Project } from "./project";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

interface ProjectDetailsProps {
  projects: Project[];
}

export const ProjectDetails = (props: ProjectDetailsProps) => {
  const { projectSlug } = useParams();
  const project = props.projects.find(({ slug }) => slug === projectSlug);
  if (project == null) {
    return <NotFound />;
  }

  const download = project.downloadUrl;
  return (
    <div className={styles.projectDetails}>
      <h1 data-testid="project-title">
        {project.name}
        {project.year &&
          (project.showYearInProjectDetails ?? true) &&
          ` (${project.year})`}
      </h1>
      <div className={styles.facts}>
        {(project.showPlatformsInProjectDetails ?? true) && (
          <PlatformList platforms={project.platforms} full />
        )}
        {(project.minPlayers || project.maxPlayers) && (
          <div>
            <PlayerCount
              minPlayers={project.minPlayers}
              maxPlayers={project.maxPlayers}
            />
            &nbsp;Player
            {(project.maxPlayers ?? project.minPlayers) !== 1 && "s"}
          </div>
        )}
        {project.playtime && (
          <div>
            <FontAwesomeIcon icon={faHourglass} /> {project.playtime} Mins
          </div>
        )}
        {project.minAge && (
          <div>
            <FontAwesomeIcon icon={faBirthdayCake} /> Ages {project.minAge}+
          </div>
        )}
      </div>
      {(project.showScreenshotsInProjectDetails ?? true) && (
        <ScreenshotCarousel screenshots={project.screenshots} />
      )}
      <p>{project.description}</p>
      {project.details}
      <div className={styles.buttons}>
        {download && (
          <a
            href={download}
            className={`${styles.button} ${styles.primaryButton}`}
          >
            Download {project.name}
          </a>
        )}
        {project.additionalLinks?.map((link, i) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            className={
              !download && i === 0
                ? `${styles.button} ${styles.primaryButton}`
                : styles.button
            }
            rel="noopener"
          >
            {link.description}
          </a>
        ))}
      </div>
    </div>
  );
};
