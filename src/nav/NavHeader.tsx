import * as React from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NAV_HEADER_LINK_COMMON = `
  color: #fff;

  &:hover {
    background-color: #222;
  }
`;

const NavHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #333;
  color: #fff;
`;

const HomeLink = styled(Link)`
  padding: 0 16px;
  ${NAV_HEADER_LINK_COMMON}
`;

const NavHeaderLinks = styled.div`
  display: flex;
`;

const NavHeaderLink = styled.a`
  display: flex;
  align-items: center;
  padding: 16px;
  ${NAV_HEADER_LINK_COMMON}
`;

export const NavHeader = () => (
  <>
    <NavHeaderBox>
      <HomeLink to="/">
        <h2>Revolution Technologies</h2>
      </HomeLink>
      <NavHeaderLinks>
        <NavHeaderLink
          href="https://github.com/RevolutionTech/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </NavHeaderLink>
        <NavHeaderLink
          href="https://www.linkedin.com/in/lucasconnors/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </NavHeaderLink>
      </NavHeaderLinks>
    </NavHeaderBox>
  </>
);
