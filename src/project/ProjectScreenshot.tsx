import { useCallback, useState } from "react";

import styles from "./ProjectScreenshot.module.css";

interface ProjectScreenshotProps {
  url: string;
  alt: string;
}

export const ProjectScreenshot = (props: ProjectScreenshotProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const onImageLoad = useCallback(() => setIsLoading(false), []);
  return (
    <>
      {isLoading && <div className={styles.skeleton} />}
      <img
        className={
          isLoading
            ? `${styles.screenshot} ${styles.loading}`
            : styles.screenshot
        }
        src={props.url}
        alt={props.alt}
        onLoad={onImageLoad}
      />
    </>
  );
};
