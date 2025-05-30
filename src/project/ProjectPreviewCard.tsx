import * as React from "react";
import { Link } from "react-router";
import sample from "lodash/sample";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faHourglass } from "@fortawesome/free-solid-svg-icons";

import { PlatformList } from "./PlatformList";
import { PlayerCount } from "./PlayerCount";
import { Project, projectScreenshots } from "./project";
import { ProjectScreenshot } from "./ProjectScreenshot";

const ProjectPreviewCardBox = styled(Link)`
  display: flex;
  gap: 16px;
  padding: 8px 16px;
  color: #000;
  border: solid 1px #d8d8d8;
  transition: box-shadow 200ms ease-out;

  @media (max-width: 719px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  &:hover {
    box-shadow: 0 0 4px 1px rgba(0, 140, 186, 0.5);
  }
`;

const ProjectPreviewScreenshot = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 720px) {
    min-width: 264px;
    max-width: 264px;
    height: 200px;
  }
`;

const ProjectPreviewTitle = styled.h3`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const ProjectFacts = styled.div`
  display: flex;
  gap: 8px;
`;

interface ProjectCardProps {
  project: Project;
}

export const ProjectPreviewCard = ({ project }: ProjectCardProps) => {
  const screenshot = sample(projectScreenshots(project));
  return (
    <ProjectPreviewCardBox to={`/project/${project.slug}`}>
      <ProjectPreviewScreenshot>
        {screenshot && (
          <ProjectScreenshot url={screenshot.url} alt={project.name} />
        )}
      </ProjectPreviewScreenshot>
      <div>
        <ProjectPreviewTitle>
          <div>
            {project.name}
            {project.year && ` (${project.year})`}
            &nbsp;
          </div>
          <PlatformList platforms={project.platforms} />
          <ProjectFacts>
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
          </ProjectFacts>
        </ProjectPreviewTitle>
        <p>{project.description}</p>
      </div>
    </ProjectPreviewCardBox>
  );
};
