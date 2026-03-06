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
    description: 'A subscription-based music learning platform, containing cloud hosted multi-angled tutorials within structured course content.',
    desc_extra: 'This project was a lot of fun! It was entirely, planned, designed, developed, and tested by myself on behalf of the Fitzpatrick Academy of Music team.',
    screenshots: [
      '/site_imgs/ff_1.png',
      '/site_imgs/ff_2.png',
      '/site_imgs/ff_3.png',
    ],
    tech: 'React js, Next.js, Node.js, StrapiCMS, Stripe Payments, AWS Backend, Vercel Headless',
    highlights: 'Video Streaming, Video Encoding, Payment Subscription, Cloud Hosting',
    role: 'Full Stack Developer, Designer, Architect',
    link: 'https://fretfocus.com/',
    icon: './icons/ff_logo.svg',
    detail: `The site is built using the JAM stack architecture. It consists of a Next.js frontend which serves as a platform for customers to interact with lessons. This retreives the lesson content via the backend API. \n
    The backend is hosted on an AWS instance and uses StrapiCMS, covering content management, user authentication, and facilitates the ability to upload videos into cloud storage. It also handles communication with Stripe for payment processing and user verification \n
    Uploaded videos are encoded inside of AWS and are stored within streamable packets on an S3 bucket. These are then delivered to the frontend via a cloudfront URL served from StrapiCMS \n`
  },
  {
    id: 2,
    title: 'Study Buddy',
    description: 'A researched focused exploration into AI chatbots in education. Using an iteratively fine-tuned GPT model',
    desc_extra: 'This project was conducted as part of my undergraduate dissertation. It focuses on testing the potential that large language models exhibit for distilling and explaining information within an educational context.',
    detail: `Towards the end of my studies, tools like ChatGPT were released to the public. During this time I saw the profound impact it had students ability to learn, but also their ability to cheat. The whole education sector felt this impact and jumped immidately to fear and dismissal of these systems. \n
    My own experience however, was shaped through curiosity and respect for the system to be viewed as a tool. The ability to have deep intelectual back and fourth, distill topics and pull together notes without waiting 24hours for a lecturer's email, was unmatched and unprecedented \n
    Therefore it felt nessesary to explore the potential educational possibilites of such a tool, and if such a tool could be refined and placed within contextual guard-rails, so that it fit within an educational setting.  \n
    A custom GPT model was refined using cloud compute, and trained using a combination of real-world and synthetic datasets. The trained model is hosted within GPT labs and called via an API upon chat submission from a basic React.js skeleton.`,
    screenshots: [
      '/site_imgs/sb_3.png',
      '/site_imgs/sb_1.png',
      '/site_imgs/sb_2.png'
    ],
    tech: 'React js, Netlify Headless, Custom GPT model',
    highlights: 'Interactive Chatbot, AI Powered Model',
    role: 'Developer, Researcher',
    link: 'https://studybuddy-tool.netlify.app/',
    icon: './icons/sb_logo.svg',
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
        <p>Web developer | React & Next.js | Industry Experienced</p>
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
              role={item.role}
              icon={item.icon}
              detail={item.detail}
              desc_extra={item.desc_extra}
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
        <ul className={styles.contact}>
          <li>Phone Number <a href='tel:+447444167357'>07444167357</a></li>
          <li>Email <a href='mailto:21will01law00@gmail.com'>21will01law00@gmail.com</a></li>
          <li>LinkedIn <a href='https://www.linkedin.com/in/will-law-a7861a256/'>William Law</a></li>
        </ul>
      </section>
    </main>
    </>
  );
}