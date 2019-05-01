import React, { Component } from 'react';
import './Main.css';

import MainCarousel from '../components/Carousel';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

class Main extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <MainCarousel />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Footer niki />
      </div>
    );
  }
}

export default Main;
