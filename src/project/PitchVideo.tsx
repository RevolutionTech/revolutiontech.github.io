import * as React from "react";
import styled from "styled-components";

const PitchVideoContainer = styled.div`
  display: flex;
  justify-content: center;

  iframe {
    aspect-ratio: 16 / 9;
    width: 100% !important;
  }
`;

interface PitchVideoProps {
  videoUrl: string;
}

export const PitchVideo = (props: PitchVideoProps) => (
  <PitchVideoContainer>
    <iframe
      src={props.videoUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </PitchVideoContainer>
);
