"use client";

import { useState } from "react";
import clsx from "clsx";

import styles from "./ProjectSlider.module.css";

import { ChevronLeftIcon, ChevronRightIcon } from "../icons";

interface Props {
  images: string[];
  slug: string;
}

const ProjectSlider: React.FC<Props> = ({ images, slug }) => {
  const [current, setCurrent] = useState(0);
  const image = images[current];
  const canScrollPrev = current > 0;
  const canScrollNext = current < images.length - 1;

  function handlePrev() {
    if (canScrollPrev) {
      setCurrent((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (canScrollNext) {
      setCurrent((prev) => prev + 1);
    }
  }

  function handleDotClick(index: number) {
    if (current !== index) {
      setCurrent(index);
    }
  }

  return (
    <div className={styles.slider}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={`/projects/${slug}/${image}`}
          alt={`Project image ${current}`}
        />
        {canScrollPrev && (
          <div
            className={clsx(styles.actionButton, styles.prevAction)}
            role="button"
            onClick={handlePrev}
          >
            <ChevronLeftIcon />
          </div>
        )}
        {canScrollNext && (
          <div
            className={clsx(styles.actionButton, styles.nextAction)}
            role="button"
            onClick={handleNext}
          >
            <ChevronRightIcon />
          </div>
        )}
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={styles.dot}
            data-active={current === index}
            onClick={() => handleDotClick(index)}
            role="button"
          />
        ))}
      </div>
    </div>
  );
};

export { ProjectSlider };
