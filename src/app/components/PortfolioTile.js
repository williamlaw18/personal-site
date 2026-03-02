'use client';

import React, { useState } from 'react';
import styles from './PortfolioTile.module.css';

export default function PortfolioTile({ title, description, tech, highlights, icon, screenshots = [], link, expanded, onClick, animationDelay = '0s' }) {
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
        <div className={styles.details}>
            {screenshots.length > 0 && (
            <div className={styles.screenshotContainer}>
                {screenshots.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`${title} screenshot ${index + 1}`}
                    className={styles.screenshot}
                />
                ))}
            </div>
            )}

            <div className={styles.infoSections}>
            <p><strong>Tech Stack: </strong>{tech}</p>
            <p><strong>Role: </strong>Full Stack Developer</p>
            <p><strong>Highlights: </strong>{highlights}</p>
            </div>

            {link && (
            <a href={link} className={styles.tileLink} target="_blank" rel="noopener noreferrer">
                Visit Project
            </a>
            )}
        </div>
        )}
    </div>
  );
}