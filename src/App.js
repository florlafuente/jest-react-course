import React, { Component } from 'react';

import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

class App extends Component {
  render() {
    return (
      // Add data-test attr to identificate the component in the test without using classes or ids
      <div
        className="container"
        data-test="component-app"
      >
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 }
        ]} />
      </div>
    );
  };
}

export default App;
