import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import FooterBackground from "../assets/img/footer.png";

const FooterLinks = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 32px;
  width: 100%;
  min-height: 160px;
  background: url(${FooterBackground}) no-repeat center bottom;
  color: #fff;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;

  &:hover {
    color: #000;
  }
`;

export const Footer = () => (
  <>
    <FooterLinks>
      <FooterLink href="https://github.com/RevolutionTech/" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x" /> RevolutionTech
      </FooterLink>
      <FooterLink
        href="https://www.linkedin.com/in/lucasconnors/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" /> Lucas Connors
      </FooterLink>
    </FooterLinks>
  </>
);
