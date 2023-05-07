import * as React from "react";
import styled from "styled-components";

import Lucas from "./assets/img/Lucas.jpg";

const IntroCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 64px;
  padding: 16px;
  background-color: #f2f2f2;
  border: solid 1px #d8d8d8;
  font-size: 13pt;
`;

const ProfilePhoto = styled.img`
  max-height: 88px;
  border-radius: 50%;
`;

export const Intro = () => (
  <IntroCard>
    <p>
      Hi! &#x1f44b; I&apos;m Lucas Connors. I work at{" "}
      <a href="https://www.cascade.io/">Cascade</a> in San Francisco as a
      Software Engineer, but outside of work I enjoy building a variety of side
      projects. &#x1f468;&#x200d;&#x1f4bb; Below you can browse some of my
      favourites.
    </p>
    <div>
      <ProfilePhoto src={Lucas} alt="Lucas Connors" />
    </div>
  </IntroCard>
);
