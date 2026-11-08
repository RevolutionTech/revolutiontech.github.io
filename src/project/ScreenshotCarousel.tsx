import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import styles from "./ScreenshotCarousel.module.css";

interface Screenshot {
  url: string;
  caption?: string;
}

interface ScreenshotCarouselProps {
  screenshots: Screenshot[];
}

export const ScreenshotCarousel = ({
  screenshots,
}: ScreenshotCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()]);
  return (
    <section
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label="Screenshots"
    >
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.track}>
          {screenshots.map(({ url, caption }) => (
            <div key={url} className={styles.slide}>
              <img src={url} alt={caption ?? ""} />
              {caption && <p className={styles.caption}>{caption}</p>}
            </div>
          ))}
        </div>
      </div>
      {screenshots.length > 1 && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.previous}`}
            aria-label="Previous screenshot"
            onClick={() => emblaApi?.scrollPrev()}
          >
            ‹
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            aria-label="Next screenshot"
            onClick={() => emblaApi?.scrollNext()}
          >
            ›
          </button>
        </>
      )}
    </section>
  );
};
