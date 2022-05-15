import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles/base/base.scss';

import Particles from './components/particles';

import './styles/components/badPage.scss';
import ParticleController from './components/particleController';

const BadPage = () => {

  const container = useRef(null)

  const [particleSettings, setParticleSettings] = useState({});

  return(

      <React.Fragment>
        <main className='badPage' ref={container}>

          <Particles 
            mouse={true}
            container={container}
            particles={particleSettings}
            />

            <section className='pagecontainer'>
              <div className="page">
                <h1>Oops! 404</h1>
                <h2>Missing page</h2>
                <Link className='button' to={'/'}>Take me back!</Link>
                
                <ParticleController setParticles={setParticleSettings}/>
              </div>
            </section>
        </main>
          
      </React.Fragment>

  )
}


export default BadPage;