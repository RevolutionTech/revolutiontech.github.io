import * as React from "react";
import styled from "styled-components";

import TELEGRAM_PLAYER_SHEETS from "../assets/download/telegram-player-sheets.pdf";
import TELEGRAM_RULES from "../assets/download/telegram-rules.pdf";
import TELEGRAM_SELL_SHEET_IMAGE from "../assets/img/telegram/telegram-sell-sheet.png";
import TELEGRAM_SELL_SHEET_PDF from "../assets/download/telegram-sell-sheet.pdf";
import TELEGRAM_PCIO from "../assets/download/telegram.pcio";
import { Platform, Project } from "./project";

const SellSheet = styled.img`
  max-width: 100%;
`;

export const PROJECT_TELEGRAM: Project = {
  name: "Telegram",
  slug: "telegram",
  visible: true,
  year: 2024,
  description: (
    <>
      In this flip-and-write game for word puzzle lovers, you will fill letters
      into partial words and gain bonuses in order to transcribe the most
      valuable telegram.
    </>
  ),
  platforms: [Platform.BOARD_GAME],
  minPlayers: 1,
  maxPlayers: 6,
  details: (
    <div>
      <h2>Sell Sheet</h2>
      <a href={TELEGRAM_SELL_SHEET_PDF} target="_blank" rel="noreferrer">
        <SellSheet src={TELEGRAM_SELL_SHEET_IMAGE} />
      </a>
      <h2>Pitch Video</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7DTSu78uB_s?si=cekhYr3erlPv3t9D"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h2>PlayingCards.io Implementation</h2>
      <p>
        To play Telegram on PlayingCards.io, first{" "}
        <a href={TELEGRAM_PCIO} download>
          download the .pcio file
        </a>{" "}
        then{" "}
        <a
          href="https://playingcards.io/import"
          target="_blank"
          rel="noreferrer"
        >
          upload the file on PlayingCards.io
        </a>{" "}
        to create your room. If you&apos;re new to PlayingCards.io, check out
        this{" "}
        <a
          href="https://playingcards.io/docs/overview"
          target="_blank"
          rel="noreferrer"
        >
          Getting Started guide
        </a>
        .
      </p>
      <br />
      <p>
        Note that the PlayingCards.io implementation of Telegram does not
        contain player sheets. Each player will need{" "}
        <a href={TELEGRAM_PLAYER_SHEETS} target="_blank" rel="noreferrer">
          a printed player sheet
        </a>{" "}
        and something to write with.
      </p>
      <h2 style={{ marginBottom: 0 }}>Resources</h2>
    </div>
  ),
  additionalLinks: [
    {
      url: "https://telegram.revolutiontech.ca/",
      description: "Helper App",
    },
    {
      url: TELEGRAM_RULES,
      description: "Rulebook",
    },
    {
      url: TELEGRAM_PLAYER_SHEETS,
      description: "Player Sheets",
    },
    {
      url: TELEGRAM_PCIO,
      description: "PlayingCards.io .pcio",
    },
  ],
};
