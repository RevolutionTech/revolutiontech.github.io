import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Platform, PLATFORM_TO_NAME, PLATFORM_TO_FA_ICON } from "./project";

const PlatformListBox = styled.span<{ full?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
`;

interface PlatformListProps {
  platforms: Platform[];
  full?: boolean;
}

export const PlatformList = (props: PlatformListProps) => (
  <PlatformListBox full={props.full}>
    {props.platforms.map((platform) => {
      const icon = PLATFORM_TO_FA_ICON[platform];
      return (
        <div key={platform}>
          <FontAwesomeIcon key={platform} icon={icon} />
          &nbsp;{props.full && PLATFORM_TO_NAME[platform]}
        </div>
      );
    })}
  </PlatformListBox>
);
