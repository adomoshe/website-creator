import React, { Component } from 'react';
import './Main.css';

import Footer from '../components/Footer';

class Main extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Footer/>
      </div>
    );
  }
}

export default Main;
