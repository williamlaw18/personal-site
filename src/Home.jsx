import React, { useCallback, useEffect, useState, useRef } from 'react';
import { isSafari } from 'react-device-detect';

import './styles/base/base.scss';

import useHelper from './useHelper';

import Card from './components/card';
import Hero from './components/hero';
import useContentful from './useContentful';
import Loader from './components/loader';

import Particles from './components/Particles';

const Home = () => {

    const cardsBackground = useRef();
    const canvasWrapper = useRef();

    const [projects, setProjects] = useState([])
    const [experiences, setExperiences] = useState([])
    const { getEntries } = useContentful()

    const { paralxSection } = useHelper();
    const [loading, setLoading] = useState(true);


    useEffect(async () => {
      setLoading(true);
      setProjects(await getEntries('project'))
      setExperiences(await getEntries('experience'))
      setLoading(false);
      // paralxSection(cards, 0.15, 0, true);
    }, [])

    return (

      <main>

        <Loader loading={loading}/>

        <Hero />

        <section className='cards' ref={canvasWrapper}>

          <div className='cards__wrapper pagecontainer'>
            {projects.map((item, index) => (
              <Card key={index} card={item}  width={"small"}/>
            ))}

            {experiences.map((experience, index) => (
              <Card key={index} card={experience} width={"wide"}/>
            ))}

          </div>

          <div className='cards__background' ref={cards}>
            <Particles type={'hex'} container={canvasWrapper} loading={loading}/>
          </div>

        </section>

      </main>

    );
}


export default Home;
