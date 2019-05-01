import React, { Component } from 'react';

import breakpoints from '../../../components/breakpoints'
import bg from './img/background.jpg';
import crystal1 from './img/crystal1.png';
import crystal2 from './img/crystal2.png';
import crystal3 from './img/crystal3.png';
import crystal4 from './img/crystal4.png';

const crystalArr = [crystal1, crystal2, crystal3, crystal4];

const styles = {
  game: {
    marginTop: '10vh'
  },
  body: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover'
  },
  instructions: {
    maxHeight: '85vh',
    overflow: 'scroll',
    color: 'white'
  },
  text: {
    color: 'white'
  },
  button: {
    margin: 'auto',
    fontSize: '1.5rem',
    fontWeight: '900'
  },
  crystal: {
    height: '20vh',
    display: 'block',
    margin: '1vh',
    background: 'transparent',
    cursor: 'pointer'
  }
};

class Crystal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wins: 0,
      losses: 0,
      playing: false,
      playerNumber: 0,
      goalNumber: 0,
      crystal1: 0,
      crystal2: 0,
      crystal3: 0,
      crystal4: 0
    };
    this.crystalClick = this.crystalClick.bind(this);
    this.startClick = this.startClick.bind(this);
  }

  componentWillMount() {
    for (let i in styles.body) {
      document.body.style[i] = styles.body[i];
    }
  }

  startClick() {
    this.setState({
      playing: true,
      goalNumber: Math.floor(Math.random() * 101 + 19),
      crystal1: Math.floor(Math.random() * 12 + 1),
      crystal2: Math.floor(Math.random() * 12 + 1),
      crystal3: Math.floor(Math.random() * 12 + 1),
      crystal4: Math.floor(Math.random() * 12 + 1)
    });
  }

  crystalClick({ target }) {
    if (!this.state.playing) {
      return;
    }
    const name = target.name;
    this.setState(
      {
        playerNumber: this.state.playerNumber + this.state[name]
      },
      () => {
        this.check();
      }
    );
  }

  check() {
    const goalNumber = this.state.goalNumber;
    const playerNumber = this.state.playerNumber;

    if (playerNumber === goalNumber) {
      this.setState(state => ({ wins: state.wins + 1 }));
      this.resetGame(true);
    } else if (playerNumber > goalNumber) {
      this.setState(state => ({ losses: state.losses + 1 }));
      this.resetGame(false);
    } else {
      return;
    }
  }

  resetGame(gameWon) {
    this.setState({
      playing: false,
      gameWon: gameWon,
      playerNumber: 0,
      goalNumber: 0,
      crystal1: 0,
      crystal2: 0,
      crystal3: 0,
      crystal4: 0
    });
  }

  componentWillUnmount() {
    for (let i in styles.body) {
      document.body.style[i] = null;
    }
  }

  render() {

    if (window.innerWidth <= breakpoints.s) {
      styles.crystal.display = null;
    }

    const wins = this.state.wins;
    const losses = this.state.losses;
    const goalNumber = this.state.goalNumber;
    const playerNumber = this.state.playerNumber;
    const playing = this.state.playing;
    const gameWon = this.state.gameWon;

    return (
      <div className="row" style={styles.game}>
        <div className="col-sm-3" align="center">
          {crystalArr.map((crystalImg, index) => (
            <img
              name={'crystal' + (index + 1)}
              style={styles.crystal}
              src={crystalImg}
              key={index}
              alt="Crystal"
              onClick={this.crystalClick}
            />
          ))}
        </div>
        <div className="col-sm-6 text-center">
          {playing ? (
            <span>
              <h3 style={styles.text}>Goal Number: {goalNumber}</h3>
              <h3 style={styles.text}>Player Number: {playerNumber}</h3>
            </span>
          ) : (
            <span>
              {!wins && !losses ? (
                <h2 style={styles.text}>Crystal Collector</h2>
              ) : (
                <span>
                  <h2 style={styles.text}>
                    {gameWon ? 'Congrats!' : 'Oh No!'}
                  </h2>
                  <h3 style={styles.text}>Wins: {wins}</h3>
                  <h3 style={styles.text}>Losses: {losses}</h3>
                </span>
              )}
              <br />
              <button
                style={styles.button}
                className="btn btn-primary"
                onClick={this.startClick}
              >
                {!wins && !losses ? 'Press to Play' : 'Play Again?'}
              </button>
            </span>
          )}
          <br />
        </div>
        <div className="col-sm-3" style={styles.instructions}>
          <h3 style={styles.text}>Instructions:</h3>
          <p style={styles.instructions}>
            When pressed, each crystal adds a random number between 1-19 to
            "Your Total". That crystal will always add the same number until the
            game is over. To win, the player must figure out how to add "Your
            Total" such that it equals the "Goal" number. If "Your Total"
            exceeds the "Goal" number then the player losses. Once the player
            either wins or losses, then a "Play Again?" button will appear. If
            pressed, "Goal" and the crystals generate new numbers while a tally
            of wins and losses is kept. Good luck!
          </p>
        </div>
      </div>
    );
  }
}

export default Crystal;
