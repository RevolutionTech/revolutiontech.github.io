import styles from "./PitchVideo.module.css";

interface PitchVideoProps {
  videoUrl: string;
}

export const PitchVideo = (props: PitchVideoProps) => (
  <div className={styles.pitchVideo}>
    <iframe
      src={props.videoUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
);
