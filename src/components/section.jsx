import React, { Component } from 'react';

class Section extends Component{

    state = {
        sectionClass : ''
    }

    constructor(props){
        super(props);

        if (this.props.classList){
            this.state.sectionClass = ' ' + this.props.classList
        }
    }

    render(){
        return(

            <section className={"container container__section"+ this.state.sectionClass}>

                <div className="container section section__wrapper">
                    
                    {this.props.title &&
                        <h3>{this.props.title}</h3>
                    }

                    {this.props.children}

                </div>

            </section>
        )
    }
}

export default Section