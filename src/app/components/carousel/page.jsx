"use client";

import { useState, useEffect } from "react";
import styles from "./carousel.module.css";
import Image from "next/image";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const length = children.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 440) {
        setVisibleCount(1);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(length - visibleCount, 0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  };

  if (!Array.isArray(children) || length === 0) {
    return null;
  }

  console.log('values carousel',)

  return (
    <div className={styles.carouselContainer}>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <Image
          alt="left arrow"
          src="/assets/carousel_left.png"
          width={40}
          height={40}
          onClick={prevSlide}
        />
        <Image
          alt="right arrow"
          src="/assets/carousel_right.png"
          width={40}
          height={40}
          onClick={nextSlide}
          style={{ marginLeft: "10px" }}
        />
      </div>

      <div
        className={styles.carouselWrapper}
        style={{
          transform: visibleCount === 3 ? `translateX(-${(currentIndex * 100) / visibleCount}%)` : `translateX(-${(currentIndex * (100 / length))}%)`,
          width: `${(100 * length) / visibleCount}%`,
        }}
      >
        {children.map((child, index) => (
          <div
            className={styles.carouselSlide}
            key={index}
            style={{ width: visibleCount === 3 ? `${100 / length}%` : `${100 / length}%` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
