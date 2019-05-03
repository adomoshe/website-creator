import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import MenuBuilder from "./pages/MenuBuilder";

const App = () => (
  <Router>
    <div>
      <Nav />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={MenuBuilder} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
