
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/hero.scss';

const Hero = (content) => {

    const [scroll, setScroll] = useState(0);
    
    useEffect(() => {
        const onScroll = () => setScroll(window.pageYOffset);

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <section className="hero">

            <div className="hero__wrapper pagecontainer">
                
                <div className="hero__content">
                    <p className='hero__content--hello'>Hello! 👋 I'm</p>
                    <h1 className='hero__content--title'>Will Law.</h1>
                    <h2 className='hero__content--subtitle'>Developer & CS Student</h2>
                    <p className="hero__content--tagline">I'm a solutions based, front-end web developer, specializing in React. Based in the Lake District UK.</p>

                    <Link className='button' to={'./bubbles'}>Get in Touch!</Link>
                </div>

                <hr className="hero__image">
                </hr>
            </div>

            <hr className="hero__arrow" style={{transform: `translateY(${70 -scroll / 20}%)`}}>
            </hr>

      </section>
    )
}

export default Hero;