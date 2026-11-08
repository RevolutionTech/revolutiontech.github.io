import { Link } from "react-router";

import styles from "./NotFound.module.css";

export const NotFound = () => (
  <>
    <h1 className={styles.header}>404 Not Found!</h1>
    <p>
      This page no longer exists. You may be able to find what you&apos;re
      looking for from the <Link to="/">Home page</Link>.
    </p>
  </>
);
