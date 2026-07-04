import * as React from "react";
import styled from "styled-components";

interface SellSheetProps {
  sellSheetPdf: string;
  sellSheetImage: string;
}

const SellSheetImg = styled.img`
  max-width: 100%;
`;

export const SellSheet = (props: SellSheetProps) => (
  <a href={props.sellSheetPdf} target="_blank" rel="noreferrer">
    <SellSheetImg src={props.sellSheetImage} />
  </a>
);
