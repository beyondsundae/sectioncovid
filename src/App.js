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
          <Route component={Home} />
        </Switch>
    </div>
  );
}

export default App;
