import React, { Component, useEffect, useState } from 'react';

import Section from './components/section';
import ProjectCard from './components/projectCard';
import ExperienceCard from './components/experienceCard';
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
        
        <main className="pagecontainer">

          {loading == true && <Loader />}

          <section className='Projects cardwrapper'>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project}/>
            ))}
          </section>

          <section className="Experiences cardwrapper">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience}/>
            ))}
          </section>

        </main>
        
      </React.Fragment>

    );
}


export default Home;
