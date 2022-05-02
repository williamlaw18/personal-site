import React, { Component, useEffect, useState } from 'react';

import Section from './components/section';
import ProjectCard from './components/projectCard';
import ExperienceCard from './components/experienceCard';
import useContentful from './useContentful';
import Sidebar from './components/sidebar';

import './styles/base/base.scss';

const Home = () => {

    const [projects, setProjects] = useState([])
    const [experiences, setExperiences] = useState([])
    const { getEntries } = useContentful()

    useEffect(() => {
      getEntries('project').then((response) => setProjects(response));
      getEntries('experience').then((response) => setExperiences(response));
    }, [])

    return (

      <React.Fragment>
        
      <Sidebar/>
        
        <main className="pagecontainer">

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
