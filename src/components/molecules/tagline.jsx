import React, { Component } from 'react';

class Tagline extends Component{

    constructor(){
      super()
    }

    state = {
      tagCurrent : '',
      tagline : [
        'this is a tagline',
        'and another',
        'test test',
        'last one'
      ],
      time: ''
    }

    componentDidMount() {
      setInterval( () => {
          for(const tag in this.state.tagline){
            console.log(tag)
          }
        },1000)
    }

    render(){
        return(

            <span className="Tagline">{this.state.tagCurrent}</span>
        )
    }
}

export default Tagline
