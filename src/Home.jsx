import React, { Component, useEffect, useState } from 'react';

import Section from './components/section';
import Card from './components/card';
import Hero from './components/hero';
import useContentful from './useContentful';
import Loader from './components/loader';

import './styles/base/base.scss';

const Home = () => {

    const [projects, setProjects] = useState([])
    const [experiences, setExperiences] = useState([])
    const { getEntries } = useContentful()

    const [loading, setLoading] = useState(false)

    useEffect(async () => {
      setLoading(true)
      setProjects(await getEntries('project'))
      setExperiences(await getEntries('experience'))
      setLoading(false)
    }, [])

    return (

      <React.Fragment>
        
        <main>

          {loading == true && <Loader />}

          <Hero />

          <section className='Projects cardwrapper pagecontainer'>
            {projects.map((item, index) => (
              <Card key={index} card={item} loading={loading} width={"small"}/>
            ))}

            {experiences.map((experience, index) => (
              <Card key={index} card={experience} loading={loading} width={"wide"}/>
            ))}
          </section>

        </main>
        
      </React.Fragment>

    );
}


export default Home;
