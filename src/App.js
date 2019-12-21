import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Mainpage from './pages/main';
import NotFoundPage from './pages/404';
import Schedule from './pages/schedule';
import Event from './pages/event';
import Maps from './pages/map';
import FAQ from './pages/FAQ';

class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ Mainpage }></Route>
          <Route exact path='/404' component={ NotFoundPage }></Route>
          <Route exact path='/schedule' component={ Schedule }></Route>
          <Route exact path='/event' component={ Event }></Route>
          <Route exact path='/map' component={ Maps }></Route>
          <Route exact path='/FAQ' component={ FAQ }></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Router>
    );
    
  }
}
export default App;