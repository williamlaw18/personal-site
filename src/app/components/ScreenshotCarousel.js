'use client';

import React, { useState } from 'react';
import styles from './ScreenshotCarousel.module.css';

export default function ScreenshotCarousel({ screenshots = [] }) {
  const [active, setActive] = useState(null);

  const handleClick = (src, e) => {
    e.stopPropagation();
    setActive(src);
  };

  const close = (e) => {
    e.stopPropagation();
    setActive(null);
  };

  return (
    <>
      <div className={styles.carouselWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.carouselTrack}>
          {[...screenshots, ...screenshots].map((src, index) => (
            <div
              key={index}
              className={styles.screenshot}
              onClick={(e) => handleClick(src, e)}
            >
              <img src={src} alt={`screenshot ${index}`} />
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className={styles.modal} onClick={close}>
          <img src={active} className={styles.modalImage} />
        </div>
      )}
    </>
  );
}

