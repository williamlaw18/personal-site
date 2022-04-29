import React from 'react';


// Top level Modules
import Header from './components/header'
import Footer from './components/footer'

// Page router
import PageRouter from './Router'

const App = () => {

  return (
    <React.Fragment>

      <Header/>

      <PageRouter/>

      <Footer/>
      
    </React.Fragment>

  )
} 

export default App