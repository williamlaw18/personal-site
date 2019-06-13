import React, { Component } from 'react';

class Section extends Component{
    render(){
        return(

            <section className="container container__section">

                {this.props.children}

            </section>
        )
    }
}

export default Section