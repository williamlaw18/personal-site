import React, { Component } from 'react';

class Section extends Component{
    render(){
        return(

            <section className="container container__section">

                <div className="container section section__wrapper">

                    {this.props.children}

                </div>

            </section>
        )
    }
}

export default Section