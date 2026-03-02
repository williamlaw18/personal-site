'use client';

import React, { useState } from 'react';
import PortfolioTile from './components/PortfolioTile';
import AboutMe from './components/AboutMe';
import styles from './page.module.css';
import BackgroundAnimation from './components/BackgroundAnimation';

const portfolioItemsData = [
  {
    id: 1,
    title: 'FretFocus',
    description: 'A music learning platform designed to teach guitar and music theory interactively.',
    screenshots: [
      '/screenshots/fretfocus-1.png',
      '/screenshots/fretfocus-2.png',
    ],
    tech: 'React js, Next.js, Node.js, StrapiCMS, Stripe Payments, AWS Backend, Vercel Headless',
    highlights: 'Video Streaming, Video Encoding, Payment Subscription, Cloud Hosting',
    link: 'https://fretfocus.com/',
    icon: './icons/ff_logo.svg'
  },
  {
    id: 2,
    title: 'Study Buddy',
    description: 'A learning chatbot to help students study efficiently with AI-powered guidance.',
    screenshots: [
      '/screenshots/studybuddy-1.png',
      '/screenshots/studybuddy-2.png',
    ],
    tech: 'React js, Netlify Headless, Custom GPT model',
    highlights: 'Interactive Chatbot, AI Powered Model',
    link: 'https://studybuddy-tool.netlify.app/',
    icon: './icons/sb_logo.svg'
  },
];

export default function Page() {
  const [expandedId, setExpandedId] = useState(null);

  // Reorder so expanded item comes first
  const sortedItems = [...portfolioItemsData].sort((a, b) => {
    if (a.id === expandedId) return -1;
    if (b.id === expandedId) return 1;
    return 0;
  });

  return (
    <>
    <BackgroundAnimation />
    
    <main className={styles.main}>
      <header
        className={`${styles.header} ${styles.fadeSlideUp}`}
        style={{ animationDelay: '0s' }}
      >
        <h1>William Law 👋</h1>
        <p>Motivated Web developer | React & Next.js | Industry Experienced</p>
      </header>

      <section
        className={`${styles.section} ${styles.fadeSlideUp}`}
        style={{ animationDelay: '0.1s' }}
      >
        <h2>Portfolio</h2>
        <div className={styles.portfolioGrid}>
          {sortedItems.map((item, index) => (
            <PortfolioTile
              key={item.id}
              title={item.title}
              description={item.description}
              screenshots={item.screenshots}
              link={item.link}
              expanded={item.id === expandedId}
              tech={item.tech}
              highlights={item.highlights}
              icon={item.icon}
              onClick={() => setExpandedId(item.id === expandedId ? null : item.id)}
              animationDelay={`${0.15 * index + 0.2}s`} // stagger tiles
            />
          ))}
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.fadeSlideUp}`}
        style={{ animationDelay: '0.5s' }}
      >
        <AboutMe />
      </section>

      <section
        className={`${styles.section} ${styles.fadeSlideUp}`}
        style={{ animationDelay: '0.7s' }}
      >
        <h2>Contact</h2>
        <p>Any content here will also fade in and slide up on page load.</p>
      </section>
    </main>
    </>
  );
}