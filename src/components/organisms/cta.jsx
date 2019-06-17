import React, { Component } from 'react';
import CtaSingle from '../molecules/cta-single';

class Cta extends Component{

    render(){
        return(

            <section className="container container__cta">

              {this.props.title &&
                <h3 className="section__title">{this.props.title}</h3>
              }

              <div className="cta cta__wrapper">

                {
                    this.props.array.map((cta, index) => (
                        <CtaSingle key={"cta-"+ index} preview={cta.preview} image={cta.img} link={cta.link}>
                            {cta.content}
                        </CtaSingle>
                    ))
                }

              </div>

            </section>
        )
    }
}

export default Cta
