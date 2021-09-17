import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/styles/App.css';

import { Home, About, Chapters, News, Rules } from './views';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/chapters" component={Chapters} />
      <Route path="/news" component={News} />
      <Route path="/rules" component={Rules} />
    </Switch>
  </Router>
);

export default App;