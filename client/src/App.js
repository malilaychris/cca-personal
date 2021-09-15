import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/styles/App.css';

import { Home } from './views';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);

export default App;