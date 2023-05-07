import * as React from "react";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PlayerCountProps {
  minPlayers?: number;
  maxPlayers?: number;
}

const playerCountText = (minPlayers?: number, maxPlayers?: number): string => {
  if (minPlayers && !maxPlayers) {
    return `${minPlayers}+`;
  } else if (minPlayers && maxPlayers && minPlayers === maxPlayers) {
    return `${minPlayers}`;
  } else if (minPlayers && maxPlayers) {
    return `${minPlayers}-${maxPlayers}`;
  }

  return "";
};

export const PlayerCount = (props: PlayerCountProps) => (
  <>
    <FontAwesomeIcon
      icon={(props.maxPlayers ?? props.minPlayers) === 1 ? faUser : faUsers}
    />{" "}
    {playerCountText(props.minPlayers, props.maxPlayers)}
  </>
);
