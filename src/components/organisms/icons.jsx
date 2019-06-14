import React, { Component } from 'react';
import IconSingle from '../molecules/icons-single';

class Icons extends Component{
    
    render(){
        return(

            <section className="container container__icons">

            {
                this.props.array.map((icon, index) => (
                    <IconSingle key={"icon-"+ index} image={this.props.array[index]}/>
                ))
            } 

            </section>
        )
    }
}

export default Icons