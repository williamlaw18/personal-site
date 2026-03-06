'use client';

import React from 'react';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <p className={styles.paragraph}>
        Hi! I'm Will. I'm an experienced web developer in both self-employed, and industry work. I've conducted the design and architecture of major projects and have worked within fast-paced team enviroments for several years
      </p>
      <p className={styles.paragraph}>
        I've been writing code for almost a decade. Starting out by stringing together scripts in video games, before working full time as a Junior web developer for Pixel junction, then Verse Ltd.
      </p>
      <p className={styles.paragraph}>
      I returned to University where I completed a Computer Science & Artificial Intelligence Degree. And since then, I've worked as a self employed professional whilst travelling Australia in my van! 
      </p>
      <p className={styles.paragraph}>
        My home is and always will be the Lake District in the UK. Where I love to hike, climb and enjoy the peace and quiet.
      </p>
    </>
  );
}