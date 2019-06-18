import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="container__page">
        
        <div className="container">
            <h3>404</h3>

            <Link className="App-link" to="/">Return Home</Link>
        </div>

      </div>
    );
  }
}

export default About;