import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import './styles/base/base.scss';

import Canvas from './components/canvas';

import './styles/components/badPage.scss';

const BadPage = () => {

  const container = useRef(null)
  return(

      <React.Fragment>
        <main className='badPage' ref={container}>

            <Canvas type={'hex'} mouse={true} container={container}/>

            <section className='pagecontainer'>
              <div className="page">
                <h1>Oops! 404</h1>
                <h2>Missing page</h2>
                <Link className='button' to={'/'}>Take me back!</Link>
              </div>
            </section>
        </main>
          
      </React.Fragment>

  )
}


export default BadPage;