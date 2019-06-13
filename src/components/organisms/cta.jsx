import React, { Component } from 'react';
import CtaSingle from '../molecules/cta-single';
import CtaArr from '../atoms/cta-array';

class Cta extends Component{

    render(){
        return(

            <section className="container container__cta">

            {
                CtaArr.map((icon, index) => (
                    <CtaSingle image={CtaArr[index]}/>
                ))
            } 

            </section>
        )
    }
}

export default Cta