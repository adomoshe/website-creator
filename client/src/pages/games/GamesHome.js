import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Title } from '../../components/StyledTags';
import GameImage from './components/GamesDisplay';
import hangmanImg from './img/hangman.png';
import crystalImg from './img/crystal.png';
import triviaImg from './img/trivia.png';
import Footer from '../../components/Footer';

const styles = {
  row: {
    paddingTop: '6vh',
    paddingBottom: '12vh'
  },
  link: {
    color: 'black',
    textAlign: 'center'
  }
};

class GamesHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const currentURL = this.props.match.url;
    return (
      <div>
        <div className="row justify-content-center" style={styles.row}>
          <Title>Games</Title>
          <div className="col-sm-4">
            <Link to={`${currentURL}/hangman`} style={styles.link}>
              <GameImage picSource={hangmanImg}>Hangman</GameImage>
            </Link>
            <Link to={`${currentURL}/crystal_collector`} style={styles.link}>
              <GameImage picSource={crystalImg}>Crystal Collector</GameImage>
            </Link>
            <Link to={`${currentURL}/trivia`} style={styles.link}>
              <GameImage picSource={triviaImg}>Trivia</GameImage>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default GamesHome;
