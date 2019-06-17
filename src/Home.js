import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/index.sass'

// Top level Modules
import Hero from './components/organisms/hero'
import Section from './components/molecules/section'
import Icons from './components/organisms/icons';
import Cta from './components/organisms/cta';
import Fixed from './components/molecules/fixed';
import Gitfork from './components/atoms/gitfork';

//Content Arrays
import SkillsIcons from './content/skills-icons';
import PortfolioCTA from './content/portfolio-cta';

class Home extends Component{

  render(){
    return (
      <div className="page-container">

        <header>

          <Gitfork/>

          <Hero title="Will Law" tagline="Web Developer">

            <p>📍 Ulverston, Cumbria, United Kingdom</p>

          </Hero>

        </header>

        <Section>

          <p>Hi! I am a self taught, North West UK based web developer primarily experienced in Javascript, PHP, React, HTML & CSS, and Git based development.
          I love taking fresh, modern approaches to developing sites on the web, while also maintaining a key understanding off classical stacks</p>

          <p>When I'm not working, I love spending time with my close family, enjoying nights out with friends, building and tinkering with computers, and playing online video games</p>

        </Section>

        <Cta title={"Projects I've been a part of..."} array={PortfolioCTA}/>

        <Section title={"Test title here"}>

          <p>Nullam euismod nisi id suscipit venenatis. Nullam ut congue mi. Aliquam vitae velit nec sem molestie vehicula eget id tellus. Quisque non vestibulum dolor. Nullam in ligula id mi ultricies laoreet.</p>
          <p>Nam mollis efficitur diam, et pharetra arcu consectetur nec. Vestibulum commodo mauris id ex sollicitudin, eget iaculis ligula gravida. </p>

          </Section>

        <Icons array={SkillsIcons}/>

        <Fixed/>

      </div>
    );
  }
}

export default Home;
