'use client';

import React from 'react';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <p className={styles.paragraph}>
        Motivated and adaptable professional with experience in web development and client/server systems. Skilled in JavaScript, React, Next.js, and backend integration. Experienced in Agile development, Git workflows, and creating clean, modularized code.
      </p>
      <p className={styles.paragraph}>
        I have delivered projects independently and as part of teams, using modern design and development practices, and I am keen to explore new techniques such as agentic AI systems.
      </p>
    </>
  );
}