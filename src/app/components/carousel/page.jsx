"use client";


import { useState } from "react";
import styles from "./carousel.module.css";
import Image from "next/image";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = children.length;
  const visibleCount = 3; 

  const maxIndex = length - visibleCount;

  const nextSlide = () => {
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  };

  if (!Array.isArray(children) || length === 0) {
    return null;
  }

  return (
    <div className={styles.carouselContainer}>
      <div style={{ display: "flex",marginBottom:'20px' }}>
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
        style={{ transform: `translateX(-${(currentIndex * 100) / visibleCount}%)` }}
      >
        {children.map((child, index) => (
          <div className={styles.carouselSlide} key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

