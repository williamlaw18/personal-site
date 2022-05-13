import React, { Component, useEffect, useState, useRef } from 'react';

import './styles/base/base.scss';

import useHelper from './useHelper';

import Card from './components/card';
import Hero from './components/hero';
import useContentful from './useContentful';
import Loader from './components/loader';

const Home = () => {

    const cards = useRef();

    const [projects, setProjects] = useState([])
    const [experiences, setExperiences] = useState([])
    const { getEntries } = useContentful()

    const { scrollSection } = useHelper();
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
      setLoading(true);
      setProjects(await getEntries('project'))
      setExperiences(await getEntries('experience'))
      scrollSection(cards, 100);
      setLoading(false);
    }, [])

    return (

      <main>

        <Loader loading={loading}/>

        <Hero />

        <section className='cards' ref={cards}>

          <div className='cards__wrapper pagecontainer'>
            {projects.map((item, index) => (
              <Card key={index} card={item}  width={"small"}/>
            ))}

            {experiences.map((experience, index) => (
              <Card key={index} card={experience}  width={"wide"}/>
            ))}
          </div>

        </section>

      </main>

    );
}


export default Home;
