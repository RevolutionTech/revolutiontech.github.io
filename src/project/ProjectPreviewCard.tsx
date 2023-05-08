import * as React from "react";
import { Link } from "react-router-dom";
import sample from "lodash/sample";
import styled from "styled-components";

import { PlatformList } from "./PlatformList";
import { PlayerCount } from "./PlayerCount";
import { Project, projectScreenshots } from "./project";

const ProjectPreviewCardBox = styled(Link)`
  display: flex;
  gap: 16px;
  padding: 8px 16px;
  color: #000;
  border: solid 1px #d8d8d8;
  transition: box-shadow 200ms ease-out;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  :hover {
    box-shadow: 0 0 4px 1px rgba(0, 140, 186, 0.5);
  }
`;

const ProjectPreviewScreenshot = styled.img`
  max-width: 264px;
  max-height: 200px;
  object-fit: cover;
`;

const ProjectPreviewTitle = styled.h3`
  display: flex;
  gap: 4px;
  white-space: nowrap;
`;

interface ProjectCardProps {
  project: Project;
}

export const ProjectPreviewCard = ({ project }: ProjectCardProps) => {
  const randomScreenshot = sample(projectScreenshots(project.slug));
  return (
    <ProjectPreviewCardBox to={`project/${project.slug}`}>
      {randomScreenshot && (
        <ProjectPreviewScreenshot src={randomScreenshot} alt={project.name} />
      )}
      <div>
        <ProjectPreviewTitle>
          <div>
            {project.name}
            {project.year && ` (${project.year})`}
          </div>
          <PlatformList platforms={project.platforms} />
          <PlayerCount
            minPlayers={project.minPlayers}
            maxPlayers={project.maxPlayers}
          />
        </ProjectPreviewTitle>
        <p>{project.description}</p>
      </div>
    </ProjectPreviewCardBox>
  );
};
