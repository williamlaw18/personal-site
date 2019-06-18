import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/index.sass'

// Top level Modules
import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
import Fixed from './components/molecules/fixed';

// Page router
import PageRouter from './Router'

class App extends Component{

  render(){
    return (
      <div className="container__all">

        <Header/>

        <PageRouter/>

        <Fixed/>

        <Footer/>

      </div>
    );
  }
}

export default App;
