import React, { Component } from 'react';

class IconSingle extends Component{
    render(){
        return(

            <div class="icons icons__single">
                <img src={this.props.image}></img>
            </div>
        )
    }
}

export default IconSingle