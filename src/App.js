import React, { Component } from 'react';

import './App.css';

class App extends Component {

  render() {
    return (
      // Add data-test attr to identificate the component in the test without using classes or ids
      <div data-test="component-app">
      </div>
    );
  };
}

export default App;
