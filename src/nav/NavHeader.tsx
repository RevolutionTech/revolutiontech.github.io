import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

import styles from "./NavHeader.module.css";

export const NavHeader = () => (
  <>
    <header className={styles.navHeader}>
      <Link className={styles.homeLink} to="/">
        <h2>Revolution Technologies</h2>
      </Link>
      <div className={styles.links}>
        <a
          className={styles.link}
          href="https://github.com/RevolutionTech/"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/lucasconnors/"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </header>
  </>
);
