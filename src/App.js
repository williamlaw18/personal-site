import React, { Component } from 'react'
import './styles/index.sass'

// Top level Modules
import Hero from './components/organisms/hero'
import Section from './components/molecules/section'
import Icons from './components/organisms/icons';
import Cta from './components/organisms/cta';

//Content Arrays
import SkillsIcons from './content/skills-icons';
import PortfolioCTA from './content/portfolio-cta';

class App extends Component{

  render(){
    return (
      <div className="page-container">

        <Hero title="Large Title" subtitle="Some subtitle goes here">
          
          <p>Ut arcu mi, vestibulum sit amet tincidunt sit amet, pellentesque vel nisi. Mauris sit amet nisl vel est mattis condimentum eget ac sapien.</p>

        </Hero>
        
        <Section>

          <p>Nullam euismod nisi id suscipit venenatis. Nullam ut congue mi. Aliquam vitae velit nec sem molestie vehicula eget id tellus. Quisque non vestibulum dolor. Nullam in ligula id mi ultricies laoreet.</p>
          <p>Nam mollis efficitur diam, et pharetra arcu consectetur nec. Vestibulum commodo mauris id ex sollicitudin, eget iaculis ligula gravida. </p>

        </Section>

        <Cta array={PortfolioCTA}/>

        <Icons array={SkillsIcons}/>

      </div>
    );
  }
}

export default App;
