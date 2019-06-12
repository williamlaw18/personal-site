import React, { Component } from 'react';

class HeroBox extends React.Component {

    render(){
        return(

            <div className={"hero-box"}>

                <div className={"hero-box-content "+ this.props.className}>
                    
                    {this.props.title &&
                        <h2>{this.props.title}</h2>
                    }

                    <p>{this.props.children}</p>
                </div>

            </div>
        )
    }
}

export default HeroBox