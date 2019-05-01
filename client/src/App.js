import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Main from './pages/Main';
import GamesHome from './pages/games/GamesHome';

import Hangman from './pages/games/hangman/Hangman';
import Crystal from './pages/games/crystal/Crystal';
import Trivia from './pages/games/trivia/Trivia';

import BlogHome from './pages/blog/BlogHome';
import Cuba from './pages/blog/cuba/Cuba';
import SpringBreak from './pages/blog/study_abroad/SpringBreak';
import Dublin from './pages/blog/study_abroad/Dublin';
import Week2 from './pages/blog/study_abroad/Week2';
import Arrival from './pages/blog/study_abroad/Arrival';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faHandPointer,
  faArrowRight,
  faCode
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faAt, faHandPointer, faArrowRight, faCode);

const App = () => (
  <Router>
    <div>
      <Nav />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={Main} />

          <Route
            exact
            path="/blog"
            render={props => (
              <div>
                <BlogHome {...props} />
                <Footer />
              </div>
            )}
          />
          <Route
            exact
            path="/blog/cuba"
            render={props => (
              <div>
                <Cuba {...props} />
                <Footer />
              </div>
            )}
          />
          <Route
            exact
            path="/blog/spring-break"
            render={props => (
              <div>
                <SpringBreak {...props} />
                <Footer />
              </div>
            )}
          />
          <Route
            exact
            path="/blog/dublin"
            render={props => (
              <div>
                <Dublin {...props} />
                <Footer />
              </div>
            )}
          />
          <Route
            exact
            path="/blog/week_2"
            render={props => (
              <div>
                <Week2 {...props} />
                <Footer />
              </div>
            )}
          />
          <Route
            exact
            path="/blog/arrival"
            render={props => (
              <div>
                <Arrival {...props} />
                <Footer />
              </div>
            )}
          />

          <Route exact path="/games" component={GamesHome} />
          <Route exact path="/games/hangman" component={Hangman} />
          <Route exact path="/games/crystal_collector" component={Crystal} />
          <Route exact path="/games/trivia" component={Trivia} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
