
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/hero.scss';

import useHelper from '../useHelper';

const Hero = (content) => {

    const [isMobile, setIsMobile] = useState();

    const container = useRef();
    const arrow = useRef();
    const { paralxSection } = useHelper();
    
    const windowWidth = () => (window.innerWidth < 700 ? setIsMobile(true): setIsMobile(false));

    useEffect(() => {
        windowWidth()
        console.log(container.current.offsetHeight / 2)
        paralxSection(arrow, 0.5, (-container.current.offsetHeight / 2) + 50);
        window.addEventListener('resize', windowWidth);
        return () => window.removeEventListener('resize', windowWidth);
    }, []);

    return(
        <section className="hero" ref={container}>

            <div className="hero__wrapper pagecontainer">
                
                <div className="hero__content">

                    {isMobile && <hr className="hero__image">
                    </hr>}

                    <p className='hero__content--hello'>Hello! 👋 I'm</p>
                    <h1 className='hero__content--title'>Will Law.</h1>
                    <h2 className='hero__content--subtitle'>Developer & CS Student</h2>
                    <p className="hero__content--tagline">I'm a solutions based, front-end web developer, specializing in React. Based in the Lake District UK.</p>

                    <Link className='button' to={'./bubbles'}>Get in Touch!</Link>
                </div>

                {isMobile != true && <hr className="hero__image">
                </hr>}
            </div>

            <hr className="hero__arrow" ref={arrow}>
            </hr>
            

      </section>
    )
}

export default Hero;