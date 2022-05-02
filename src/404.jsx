import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const BadPage = () => {

  return(

      <React.Fragment>

        <main className="pagecontainer">
            <h1>Oops! 404</h1>
            <h2>Missing page</h2>
            <Link to={'/'}>Take me back!</Link>
        </main>
          
      </React.Fragment>

  )
}


export default BadPage;