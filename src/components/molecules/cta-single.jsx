import React, { Component } from 'react';

class CtaSingle extends Component{

    state = {
        ctaToggle: false,
        ctaClass: ''
    }

    handleClick = (ctaToggle) => {
        this.setState({
            ctaToggle: !this.state.ctaToggle
        })
    }

    render(){
        return(

            <div className="cta cta__single" toggled={this.state.ctaToggle.toString()}>
                
                <div className={"cta__single-wrapper" + this.state.ctaClass} onClick={this.handleClick} style={{backgroundImage: "url("+ this.props.image +")"}}>

                    <div className="cta__single-preview">
                        <h3>{this.props.preview}</h3>
                    </div>

                    <div className="cta__single-content">

                        {this.props.children}

                    </div>

                </div>

            </div>
        )
    }
}

export default CtaSingle