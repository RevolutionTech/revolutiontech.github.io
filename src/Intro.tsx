import Lucas from "./assets/img/Lucas.jpg";
import styles from "./Intro.module.css";

interface IntroProps {
  children: React.ReactNode;
}

export const Intro = (props: IntroProps) => (
  <div className={styles.intro}>
    <p>{props.children}</p>
    <div>
      <img className={styles.profilePhoto} src={Lucas} alt="Lucas Connors" />
    </div>
  </div>
);
