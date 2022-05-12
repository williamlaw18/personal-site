import React, { Component, useEffect, useState } from 'react';

import './styles/base/base.scss';

import Card from './components/card';
import Hero from './components/hero';
import useContentful from './useContentful';
import Loader from './components/loader';

const Home = () => {

    const [projects, setProjects] = useState([])
    const [experiences, setExperiences] = useState([])
    const { getEntries } = useContentful()

    const [loading, setLoading] = useState(true)

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

          <section className='cards pagecontainer'>

            <div className='cards__wrapper'>
              {projects.map((item, index) => (
                <Card key={index} card={item} loading={loading} width={"small"}/>
              ))}

              {experiences.map((experience, index) => (
                <Card key={index} card={experience} loading={loading} width={"wide"}/>
              ))}
            </div>

          </section>

        </main>
        
      </React.Fragment>

    );
}


export default Home;
