"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedText.module.css";

export default function Animation
({
  children,
  animation,
  className,
  style,
  onClick
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={style}
      className={`${className ? className : ""} ${
        animation === "fadeInUp"
          ? styles.fadeInUp
          : animation === "fadeInRight"
          ? styles.fadeInRight
          : animation === "fadeInLeft"
          ? styles.fadeInLeft
          : styles.fadeInDown
      } ${isVisible ? styles.visible : ""}`}
      onClick={onClick || null}
    >
      {children}
    </div>
  );
}
