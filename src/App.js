import React, { Component } from 'react';

import './App.css';

class App extends Component {

  render() {
    return (
      // Add data-test attr to identificate the component in the test without using classes or ids
      <div data-test="component-app">
        <h1 data-test="component-counter-display">The counter is:</h1>
        <button data-test="component-increment-button">Click me</button>
      </div>
    );
  };
}

export default App;
