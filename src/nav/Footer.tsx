import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Footer.module.css";

export const Footer = () => (
  <>
    <footer className={styles.footer}>
      <a
        className={styles.link}
        href="https://github.com/RevolutionTech/"
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" /> RevolutionTech
      </a>
      <a
        className={styles.link}
        href="https://www.linkedin.com/in/lucasconnors/"
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" /> Lucas Connors
      </a>
    </footer>
  </>
);
