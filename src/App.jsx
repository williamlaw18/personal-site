import React from 'react';

import './styles/index.scss'

// Top level Modules
import Header from './components/header'
import Footer from './components/footer'

// Page router
import PageRouter from './Router'

const App = () => {

  return (
    <div className="container__all">

    <Header/>

    <PageRouter/>

    <Footer/>

  </div>
  )
} 

export default App