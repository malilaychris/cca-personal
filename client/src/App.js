import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/styles/App.css';

import { Home, About, Chapters, ChapterPage, ChapterPageUTAustin, News, Rules } from './views';
import { Header } from './components';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/chapters/ut-austin" component={ChapterPageUTAustin} />
        <Route path="/chapters/:chapter" component={ChapterPage} />
        <Route path="/chapters" component={Chapters} />
        <Route path="/news" component={News} />
        <Route path="/rules" component={Rules} />
      </Switch>
    </Router>
  );
};

export default App;