import React, { Component } from 'react';
import HeroBox from '../molecules/hero-box';

const Hero = () => {
    return(

        <div className="container hero__container">

            <h1>Large Title</h1>

            <div className="hero">

            <HeroBox className="bg-green" title="Test title"></HeroBox>

            <HeroBox className="bg-gray">Some content here</HeroBox>

            <HeroBox className="bg-blue">Some content here</HeroBox>
            
            </div>

        </div>
    )
}

export default Hero