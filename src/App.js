import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as HashRouter, Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/HomeLong" component={HomeLong} />
          <Route exact path="/NewCase" component={NewCase} />
          <Route exact path="/About" component={About} />
          <Route component={NotFoundPage} /> */}
        </Switch>
    </div>
  );
}

export default App;
