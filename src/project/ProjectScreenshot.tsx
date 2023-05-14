import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Skeleton = styled.div`
  width: 100%;
  height: 100%;

  // Skeleton animation inspired by:
  // https://codepen.io/viktorstrate/pen/yoBRLy
  background-color: #ccc;
  background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
  background-size: 344px;
  animation: shine-screenshot 1.6s infinite linear;

  @keyframes shine-screenshot {
    0% {
      background-position: -80px;
    }
    40%,
    100% {
      background-position: 264px;
    }
  }
`;
const ScreenshotImg = styled.img<{ isLoading: boolean }>`
  display: ${(props) => (props.isLoading ? "none" : "inherit")};
  max-width: 264px;
  max-height: 200px;
  object-fit: contain;
`;

interface ProjectScreenshotProps {
  url: string;
  alt: string;
}

export const ProjectScreenshot = (props: ProjectScreenshotProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const onImageLoad = useCallback(() => setIsLoading(false), [setIsLoading]);
  return (
    <>
      {isLoading && <Skeleton />}
      <ScreenshotImg
        src={props.url}
        alt={props.alt}
        isLoading={isLoading}
        onLoad={onImageLoad}
      />
    </>
  );
};
