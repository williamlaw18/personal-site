import React, { Component } from 'react';

// Top level Modules
import Hero from './hero'
import Gitfork from '../atoms/gitfork';

class Header extends Component{

  render(){
    return (
        <header>

            <Gitfork/>

            <Hero title="Will Law" tagline="Web Developer">

            <p>📍 Ulverston, Cumbria, United Kingdom</p>

            </Hero>

        </header>
    );
  }
}

export default Header;
