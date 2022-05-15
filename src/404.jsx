import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles/base/base.scss';

import Particles from './components/Particles';

import './styles/components/badPage.scss';

const BadPage = () => {

  const container = useRef(null)

  const [canvasType, setCanvasType] = useState('hex');

  useEffect(() => {
    console.log(canvasType)
  }, [canvasType])

  return(

      <React.Fragment>
        <main className='badPage' ref={container}>

          <Particles 
            type={canvasType}
            mouse={true}
            container={container}
            />

            <section className='pagecontainer'>
              <div className="page">
                <h1>Oops! 404</h1>
                <h2>Missing page</h2>
                <Link className='button' to={'/'}>Take me back!</Link>
                
                <button className='button' onClick={() => setCanvasType('circle')}> Change!</button>
              </div>
            </section>
        </main>
          
      </React.Fragment>

  )
}


export default BadPage;