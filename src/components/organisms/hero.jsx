import React, { Component } from 'react';
import Tagline from '../molecules/tagline';

class Hero extends Component{

    render(){
        return(

            <section className="container container__hero">

                {this.props.title &&
                    <h1>{this.props.title}</h1>
                }

                <div className="hero">

                    <h2>{this.props.tagline}</h2>

                    {this.props.children}

                </div>

            </section>
        )
    }
}

export default Hero
