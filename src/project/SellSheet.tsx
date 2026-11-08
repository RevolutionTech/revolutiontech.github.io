import styles from "./SellSheet.module.css";

interface SellSheetProps {
  projectName: string;
  sellSheetPdf: string;
  sellSheetImage: string;
}

export const SellSheet = (props: SellSheetProps) => (
  <a href={props.sellSheetPdf} target="_blank" rel="noreferrer">
    <img
      className={styles.sellSheet}
      src={props.sellSheetImage}
      alt={`${props.projectName} sell sheet`}
    />
  </a>
);
