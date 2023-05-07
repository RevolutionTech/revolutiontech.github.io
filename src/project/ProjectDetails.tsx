import * as React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Header } from "../molecules/Header";
import { NotFound } from "../nav/NotFound";
import { PlatformList } from "./PlatformList";
import { PlayerCount } from "./PlayerCount";
import { projectLinkDefaultCopy } from "./projectLink";
import { ProjectLinkType } from "./project";
import { PROJECT_MAP } from "./AllProjects";

const ProjectFacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 20pt;
`;

const ProjectCarousel = styled(Carousel)`
  .carousel.carousel-slider .control-arrow {
    background-color: #0003;
  }
`;

const ProjectButtons = styled.div`
  display: flex;
  gap: 4px;
`;

const ProjectButton = styled.a<{ isPrimary: boolean }>`
  padding: 16px 24px;
  cursor: pointer;
  background-color: ${(props) => (props.isPrimary ? "#008cba" : "#a0d3e8")};
  color: ${(props) => (props.isPrimary ? "#fff" : "#000")};
  transition: background-color 300ms ease-out;

  :hover {
    color: #fff;
    background-color: ${(props) => (props.isPrimary ? "#007095" : "#61b6d9")};
  }
`;

export const ProjectDetails = () => {
  const { projectSlug } = useParams();
  if (projectSlug == null) {
    return <NotFound />;
  }
  const project = PROJECT_MAP[projectSlug];
  if (project == null) {
    return <NotFound />;
  }

  return (
    <>
      <Header>
        {project.name} ({project.year})
      </Header>
      <ProjectFacts>
        <PlatformList platforms={project.platforms} full />
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
      </ProjectFacts>
      <ProjectCarousel
        showArrows
        showStatus={false}
        showIndicators={project.screenshots.length > 1}
        infiniteLoop
        showThumbs={false}
        autoPlay
      >
        {project.screenshots.map((screenshot) => (
          <img key={screenshot} src={screenshot} />
        ))}
      </ProjectCarousel>
      <p>{project.description}</p>
      <ProjectButtons>
        {project.links.map((link, i) => (
          <ProjectButton
            key={link.url}
            href={link.url}
            {...(link.type === ProjectLinkType.DOWNLOAD
              ? {}
              : { target: "_blank" })}
            isPrimary={i === 0}
          >
            {link.description ??
              projectLinkDefaultCopy(project.name, link.type)}
          </ProjectButton>
        ))}
      </ProjectButtons>
    </>
  );
};
