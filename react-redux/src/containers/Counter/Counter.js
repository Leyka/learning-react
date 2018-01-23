import React, { Component } from 'react';
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay';
import CounterButton from  '../../components/CounterButton/CounterButton';
import CounterInput from '../../components/CounterInput/CounterInput';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <small>-- Counter Container --</small>
        <CounterDisplay counter={5}/>
        <CounterInput />
        <CounterButton text={'Add'} />
        <CounterButton text={'Remove'} />
      </div>
    );
  }
}

export default Counter;