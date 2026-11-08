import Lucas from "./assets/img/Lucas.jpg";
import styles from "./Intro.module.css";

interface IntroProps {
  everything?: boolean;
}

export const Intro = (props: IntroProps) => (
  <div className={styles.intro}>
    {props.everything ? (
      <p>
        Wow, you really want to see everything, huh? &#x1f633; A lot of the old
        stuff is just here for posterity, it&apos;s not actually very
        interesting. Uhh&hellip; just don&apos;t say I didn&apos;t warn
        you&hellip; &#x1f605;
      </p>
    ) : (
      <p>
        Hi! &#x1f44b; I&apos;m Lucas Connors. I work at{" "}
        <a href="https://optro.ai/" target="_blank" rel="noreferrer">
          Optro
        </a>{" "}
        in San Francisco as a Software Engineer, but outside of work I enjoy
        building a variety of side projects. &#x1f468;&#x200d;&#x1f4bb; Below
        you can browse some of my favourites.
      </p>
    )}
    <div>
      <img className={styles.profilePhoto} src={Lucas} alt="Lucas Connors" />
    </div>
  </div>
);
