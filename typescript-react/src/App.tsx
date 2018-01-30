import * as React from 'react';
import { Card } from './components/Card';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Card name="Alex" age="12" />
        <Card name="Bob" age="65" />
        <Card name="Julia" age="30" />
      </div>
    );
  }
}

export default App;
