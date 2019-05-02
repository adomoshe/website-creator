import React, { Component } from "react";
import "./Main.css";

import FormHandler from "../components/FormHandler/FormHandler";

class Main extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <FormHandler />
      </div>
    );
  }
}

export default Main;
