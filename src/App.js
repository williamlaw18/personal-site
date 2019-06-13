import React from 'react'
import './styles/index.sass'
import Hero from './components/organisms/hero'
import Section from './components/molecules/section'
import Icons from './components/organisms/icons';

function App() {
  return (
    <div className="page-container">
      <Hero />
      
      <Section>

            <p>
                Nullam euismod nisi id suscipit venenatis. Nullam ut congue mi. Aliquam vitae velit nec sem molestie vehicula eget id tellus. Quisque non vestibulum dolor. Nullam in ligula id mi ultricies laoreet.
            </p>

            <p>
                Nam mollis efficitur diam, et pharetra arcu consectetur nec. Vestibulum commodo mauris id ex sollicitudin, eget iaculis ligula gravida. 
            </p>

      </Section>

      <Icons />

    </div>
  );
}

export default App;