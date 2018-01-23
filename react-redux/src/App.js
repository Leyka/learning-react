import React, { Component } from 'react';
import Counter from './containers/Counter/Counter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <pre> ** The goal of this lab is to learn how React communicate with Redux **</pre>
        <Counter />
      </div>
    );
  }
}

export default App;
