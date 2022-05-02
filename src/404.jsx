import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const BadPage = () => {

  return(

      <React.Fragment>

          <main className="pagecontainer">
              <h2>404</h2>
              <Link to={'/'}>Back to Home page</Link>
          </main>
          
      </React.Fragment>

  )
}


export default BadPage;