import React, { Component } from 'react';

class CtaSingle extends Component{
    render(){
        return(

            <div className="cta cta__single">
                
                <div className="cta__single-wrapper" style={{backgroundImage: "url("+ this.props.image +")"}}>

                    <div className="cta__single-content">

                        {this.props.children}

                    </div>

                </div>

            </div>
        )
    }
}

export default CtaSingle