import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBContainer } from "mdbreact";

import "./App.css";
import Nav from "./components/Nav";
import MenuBuilder from "./pages/MenuBuilder";

const App = () => (
  <Router>
    <>
      <Nav />
      <MDBContainer fluid>
        <Switch>
          <Route exact path="/menu" component={MenuBuilder} />
        </Switch>
      </MDBContainer>
    </>
  </Router>
);

export default App;
