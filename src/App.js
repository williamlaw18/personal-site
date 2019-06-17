import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import BadPage from './404';

import Footer from './components/organisms/footer'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={BadPage} />

        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
