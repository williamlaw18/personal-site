import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/index.sass'

// Page level Modules
import Section from './components/molecules/section'
import Icons from './components/organisms/icons';
import Cta from './components/organisms/cta';

//Content Arrays
import SkillsIcons from './content/skills-icons';
import PortfolioCTA from './content/portfolio-cta';

class Home extends Component{

  render(){
    return (
      <div className="container__page">

        <Section>

          <p>Hi! I'm a self taught, North West UK based web developer primarily experienced in Javascript, PHP, React, HTML & CSS, and Git based development.
          I love taking fresh, modern approaches to developing sites on the web, while also maintaining a key understanding of classical methods</p>

          <p>When I'm not working, I love spending time with my close family, enjoying nights out with friends, building and tinkering with computers, and playing video games online</p>

        </Section>

        <Cta title={"A few projects I've been a part of..."} array={PortfolioCTA}/>

        <Section title={"Development Experience"}>

          <p>I first started programming when I was about 16, I was interested in video games and I dipped my toe into map making and scripting to go along with it. I eventually pulished a community map which was very well received, this introduction to programming led my decision in following a level 3 computing course at Kendal College where I came out with a DMM result</p>
          <p>Streight out of college I landed a junior web development position at <a href="https://www.pixeljunction.co.uk">Pixel Junction</a> and worked with some awesome people where I worked both individually and as part of a development team</p>
          <p>After a year with Pixel, the company merged with <a href="https://www.verse.co.uk/">Verse ltd.</a> where I became accustomed to large scale projects and thorough development cycles, aswell as heavy client communication and relations due to their modern 'Agile' approach to project management</p>

          </Section>

        <Icons array={SkillsIcons}/>

      </div>
    );
  }
}

export default Home;
