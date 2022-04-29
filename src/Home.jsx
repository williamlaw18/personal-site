import React, { Component, useEffect, useState } from 'react';
import './styles/index.scss'

import Section from './components/section';
import PersonCard from './components/person';
import useContentful from './useContentful';

const Home = () => {

    const [persons, setPersons] = useState([])
    const { getPersons } = useContentful()
    const [count, setCount] = useState(0)

    useEffect(() => {
      getPersons().then((response) => setPersons(response))
    }, [])

    return (
      <div className="container__page">

        <Section>

          <p>contents</p>

        </Section>

        <button onClick={() => setCount(count + 1)}>{count}</button>

        {persons.map((person, index) => (
          <PersonCard key={index} person={person}/>
        ))}

      </div>
    );
}


export default Home;
