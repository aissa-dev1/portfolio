"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./ProjectSlider.module.css";

import { Button, ButtonSize } from "../Button";

interface Props {
  images: string[];
  slug: string;
}

const ProjectSlider: React.FC<Props> = ({ images, slug }) => {
  const [current, setCurrent] = useState(0);
  const image = images[current];

  function handlePrev() {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (current < images.length - 1) {
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
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={styles.dot}
            data-active={current === index}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className={styles.actions}>
        <Button size={ButtonSize.Small} onClick={handlePrev}>
          Prev
        </Button>
        <Button size={ButtonSize.Small} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export { ProjectSlider };
