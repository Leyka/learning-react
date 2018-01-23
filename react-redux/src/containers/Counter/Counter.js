import React, { Component } from 'react';
//import { connect } from 'react-redux';
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>My counter wrapper</h1>
        <CounterDisplay counter={5}/>
      </div>
    );
  }
}

export default Counter;