import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PlatformList.module.css";
import {
  PLATFORM_TO_FA_ICON,
  PLATFORM_TO_NAME,
  type Platform,
} from "./project";

interface PlatformListProps {
  platforms: Platform[];
  full?: boolean;
}

export const PlatformList = (props: PlatformListProps) => (
  <span
    className={
      props.full ? `${styles.platformList} ${styles.full}` : styles.platformList
    }
  >
    {props.platforms.map((platform) => {
      const icon = PLATFORM_TO_FA_ICON[platform];
      return (
        <div key={platform}>
          <FontAwesomeIcon key={platform} icon={icon} />
          &nbsp;{props.full && PLATFORM_TO_NAME[platform]}
        </div>
      );
    })}
  </span>
);
