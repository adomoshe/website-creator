import React, { Component } from 'react';

import bg from './bg.jpg';

const styles = {
  game: {
    marginTop: '10vh',
    paddingLeft: '4vh'
  },
  body: {
    backgroundImage: `url(${bg})`,
    // backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  input: {
    opacity: 0,
    cursor: 'default'
  },
  text: {
    color: 'white'
  }
};

class Hangman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wins: 0,
      losses: 0,
      gameOn: false,
      display: '',
      remainingGuesses: 5,
      wordBeingGuessed: '',
      guessedLetters: '',
      userGuess: '',
      moviePick: '',
      correctUserGuesses: []
    };
    this.initial = this.initial.bind(this);
    this.guess = this.guess.bind(this);
  }

  movieList = [
    'Pulp Fiction',
    'Inglorious Basterds',
    'Reservoir Dogs',
    'The Hateful Eight',
    'Kill Bill',
    'Jackie Brown',
    'Django Unchained'
  ];

  componentWillMount() {
    for (let i in styles.body) {
      document.body.style[i] = styles.body[i];
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.initial);

    // Using this to force keyboard to popup on phones
    document.getElementById("hackingAway").focus();
  }

  initial(e) {
    if (e.code === 'Space') {
      this.start();
    }
  }

  start() {
    document.removeEventListener('keyup', this.initial);
    const pick = this.movieList[
      Math.floor(Math.random() * this.movieList.length)
    ];
    this.setState({
      gameOn: true,
      display: '',
      moviePick: pick.toUpperCase()
    });
    console.log('Here it is... ', this.state.moviePick);
    this.stringGen();
    document.addEventListener('keyup', this.guess);
  }

  stringGen() {
    this.setState({ wordBeingGuessed: '' });
    let finalWordBeingGuessed = '';
    letter: for (let i = 0; i < this.state.moviePick.length; i++) {
      for (let t = 0; t < this.state.correctUserGuesses.length; t++) {
        if (this.state.moviePick[i] === this.state.correctUserGuesses[t]) {
          finalWordBeingGuessed += this.state.correctUserGuesses[t] + ' ';
          continue letter;
        }
      }
      if (i === this.state.moviePick.length - 1) {
        finalWordBeingGuessed += '_';
      } else if (this.state.moviePick[i] === ' ') {
        finalWordBeingGuessed += '- ';
      } else {
        finalWordBeingGuessed += '_ ';
      }
    }
    this.setState({
      wordBeingGuessed: finalWordBeingGuessed
    });
  }

  guess(e) {
    if (this.screenInput(e)) {
      return;
    } else {
      this.logic();
    }
  }

  logic() {
    if (this.state.moviePick.indexOf(this.state.userGuess) === -1) {
      this.setState(state => {
        state.remainingGuesses--;
      });
      this.setState(state => ({
        guessedLetters: (state.guessedLetters += state.userGuess)
      }));
      this.check();
    } else {
      this.setState(state => {
        state.correctUserGuesses.push(state.userGuess);
      });
      this.stringGen();
      this.check();
    }
  }

  screenInput(input) {
    try {
      if (input.keyCode < 65 || input.keyCode > 90) {
        if (input.code === 'Space') {
          throw input.code;
        } else {
          throw input.key;
        }
      } else {
        this.setState({ userGuess: input.key.toUpperCase() });
      }
    } catch (err) {
      alert(`${err} is an invalid key`);
      return true;
    }
    try {
      if (
        this.state.guessedLetters.indexOf(this.state.userGuess) !== -1 ||
        this.state.wordBeingGuessed.indexOf(this.state.userGuess) !== -1
      ) {
        throw this.state.userGuess;
      }
    } catch (err) {
      alert(`You already guessed ${err}!`);
      return true;
    }
    return false;
  }

  check() {
    if (this.state.wordBeingGuessed.indexOf('_ ' && '_') === -1) {
      this.setState(state => ({
        status: 'won',
        wins: state.wins + 1
      }));
      this.resetGame('win');
    } else if (this.state.remainingGuesses === 0) {
      this.setState(state => ({
        status: 'lost',
        losses: state.losses + 1
      }));
      this.resetGame('lost');
    }
  }

  resetGame(gameStatus) {
    if (gameStatus === 'win') {
      this.setState({ display: 'Correct!' });
    }
    if (gameStatus === 'lost') {
      this.setState({
        display: `The correct movie was ${this.state.moviePick}`
      });
    }
    this.setState({
      gameOn: false,
      remainingGuesses: 5,
      wordBeingGuessed: '',
      guessedLetters: '',
      userGuess: '',
      moviePick: '',
      correctUserGuesses: []
    });
    document.removeEventListener('keyup', this.guess);
    document.addEventListener('keyup', this.initial);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.initial);
    document.removeEventListener('keyup', this.guess);
    for (let i in styles.body) {
      document.body.style[i] = null;
    }
  }

  render() {
    const wins = this.state.wins;
    const losses = this.state.losses;
    const wordBeingGuessed = this.state.wordBeingGuessed;
    const guessedLetters = this.state.guessedLetters;
    const remainingGuesses = this.state.remainingGuesses;
    const gameOn = this.state.gameOn;

    return (
      <div className="row" >
      <div className="col-sm-4 " style={styles.game}>
      <input type="text" id='hackingAway' style={styles.input}></input>
        <h1 style={styles.text}>Hangman!</h1>
        <br />
        <h2 style={styles.text}>Tarantino Movies Edition</h2>
        <br />
        {gameOn ? (
          <span>
            <h3 style={styles.text}>{wordBeingGuessed}</h3>
            <br />
            <h4 style={styles.text}>{guessedLetters}</h4>
            <h4 style={styles.text}>Remaining Guesses: {remainingGuesses}</h4>
          </span>
        ) : (
          <span>
            <h3 style={styles.text}>Press Space to play!</h3>
            <br />
            <h3 style={styles.text}>Wins: {wins}</h3>
            <h3 style={styles.text}>Losses: {losses}</h3>
            <br />
            <h2 style={styles.text}>{this.state.display}</h2>
          </span>
        )}
      </div>
      </div>
    );
  }
}

export default Hangman;
