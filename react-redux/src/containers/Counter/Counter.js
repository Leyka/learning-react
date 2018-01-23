import React, { Component } from 'react';
//import { connect } from 'react-redux';
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay';
import CounterButton from  '../../components/CounterButton/CounterButton';
import counterInput from '../../components/CounterInput/CounterInput';
import CounterInput from '../../components/CounterInput/CounterInput';
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