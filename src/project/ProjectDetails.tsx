import * as React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { NotFound } from "../nav/NotFound";
import { PlatformList } from "./PlatformList";
import { PlayerCount } from "./PlayerCount";
import { projectScreenshots, projectDownload } from "./project";
import { PROJECT_MAP } from "./AllProjects";

const ProjectDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1,
  p {
    margin: 0;
  }
`;

const ProjectFacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 20pt;
`;

const ProjectCarousel = styled(Carousel)`
  .carousel.carousel-slider .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
  }
  .carousel.carousel-slider .slide img {
    width: unset;
    max-width: 100%;
  }
  .carousel.carousel-slider .control-arrow {
    opacity: unset;
  }
`;

const ProjectButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const ProjectButton = styled.a<{ $isPrimary: boolean }>`
  padding: 16px 24px;
  cursor: pointer;
  background-color: ${(props) => (props.$isPrimary ? "#008cba" : "#a0d3e8")};
  color: ${(props) => (props.$isPrimary ? "#fff" : "#000")};
  transition: background-color 300ms ease-out;

  &:hover {
    color: #fff;
    background-color: ${(props) => (props.$isPrimary ? "#007095" : "#61b6d9")};
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

  const screenshots = projectScreenshots(project);
  const download = projectDownload(project.slug);
  return (
    <ProjectDetailsBox>
      <h1>
        {project.name}
        {project.year && ` (${project.year})`}
      </h1>
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
        showIndicators={screenshots.length > 1}
        infiniteLoop
        showThumbs={false}
        autoPlay
      >
        {screenshots.map(({ url, caption }) => (
          <div key={url}>
            <img src={url} />
            {caption && <p className="legend">{caption}</p>}
          </div>
        ))}
      </ProjectCarousel>
      <p>{project.description}</p>
      <ProjectButtons>
        {download && (
          <ProjectButton href={download} $isPrimary>
            Download {project.name}
          </ProjectButton>
        )}
        {project.additionalLinks?.map((link, i) => (
          <ProjectButton
            key={link.url}
            href={link.url}
            target="_blank"
            $isPrimary={!download && i === 0}
          >
            {link.description}
          </ProjectButton>
        ))}
      </ProjectButtons>
    </ProjectDetailsBox>
  );
};
