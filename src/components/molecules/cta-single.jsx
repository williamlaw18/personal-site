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

                        
                          <div className="button__container">
                            {this.props.link &&
                                <a className="button button__primary" href={this.props.link}>
                                Check it out!
                                </a>
                            }
                            {!this.props.link &&
                                <a className="button button__primary" href="#">
                                    Not Currently Available!
                                </a>
                            }
                          </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default CtaSingle
