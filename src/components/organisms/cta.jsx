import React, { Component } from 'react';
import CtaSingle from '../molecules/cta-single';

class Cta extends Component{

    render(){
        return(

            <section className="container container__cta">

            {
                this.props.array.map((icon, index) => (
                    <CtaSingle key={"cta-"+ index} preview={icon.preview} image={icon.img}>
                        {icon.content}
                    </CtaSingle>
                ))
            } 

            </section>
        )
    }
}

export default Cta