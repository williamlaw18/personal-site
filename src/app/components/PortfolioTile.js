'use client';

import React from 'react';
import styles from './PortfolioTile.module.css';
import ScreenshotCarousel from './ScreenshotCarousel';

export default function PortfolioTile({
  title,
  description,
  tech,
  highlights,
  icon,
  screenshots = [],
  link,
  expanded,
  role,
  onClick,
  desc_extra,
  detail,
  animationDelay = '0s'
}) {
  return (
    <div
      className={`${styles.tile} ${expanded ? styles.expanded : ''} ${styles.fadeSlideUp}`}
      style={{ animationDelay }}
      onClick={onClick}
    >
      <div className={styles.titleContainer}>
        <h3 className={styles.tileTitle}>{title}</h3>
        {icon && (
          <img src={icon} alt={`${title} icon`} className={styles.tileIcon} />
        )}
      </div>

      <p className={styles.tileDescription}>{description}</p>

      {expanded && (
        <>
        <p className={styles.fadeSlideUp}>{desc_extra}</p>
        <div className={styles.details} onClick={(e) => e.stopPropagation()}>
          
          <p className={styles.content}>
            {detail}
          </p>
          {screenshots.length > 0 && (
            <div
              className={styles.screenshotContainer}
              onClick={(e) => e.stopPropagation()}
            >
              {screenshots.length > 0 && (
                <ScreenshotCarousel screenshots={screenshots} />
              )}
            </div>
          )}

          <div className={styles.infoSections}>
            <p><strong>Role: </strong>{role}</p>
            <p><strong>Tech Stack: </strong>{tech}</p>
            <p><strong>Highlights: </strong>{highlights}</p>
          </div>

          {link && (
            <a
              href={link}
              className={styles.tileLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Visit Project
            </a>
          )}

          <div>

          </div>
        </div>
        </>
      )}
    </div>
  );
}
