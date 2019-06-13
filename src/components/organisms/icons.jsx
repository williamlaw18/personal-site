import React, { Component } from 'react';
import IconSingle from '../molecules/icons-single';
import IconArr from '../atoms/icons-array';

class Icons extends Component{
    render(){
        return(

            <section className="container container__icons">

            {
                IconArr.map((icon, index) => (
                    <IconSingle image={IconArr[index]}/>
                ))
            } 

            </section>
        )
    }
}

export default Icons