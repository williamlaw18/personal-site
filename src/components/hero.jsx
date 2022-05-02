
import React from 'react';

import '../styles/components/hero.scss';

const Hero = (content) => {
    return(
        <section class="hero">

            <div className='hero__background'>

            </div>

            <div className="hero__wrapper pagecontainer">
                
                <div className="hero__image">

                </div>

                <div className="hero__content">
                    <h1 className='header__title'>Will Law</h1>
                    <h2 className="header__subtitle">Web Developer & CS Enthusiast</h2>
                    <p className="header__tagline">📍 Ulverston, Lake District, United Kingdom</p>
                </div>
            </div>

      </section>
    )
}

export default Hero;