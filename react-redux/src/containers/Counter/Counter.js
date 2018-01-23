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
        <CounterDisplay counter={this.props.counterValue}/>
        <CounterInput />
        <CounterButton text={'Add'} click={this.props.onAddCounter} />
        <CounterButton text={'Substract'} click={this.props.onSubstractCounter} />
      </div>
    );
  }
}

// Map the global store to propTypes of 'Counter' container
const mapStateToProps = state => ({
  counterValue: state.counter
});

// Also map all the dispatches, again to propTypes of 'Counter'
const mapDispatchToProps = dispatch => ({
  onAddCounter: () => dispatch({type: 'ADD', payload: 5}), 
  onSubstractCounter: () => dispatch({type: 'SUBSTRACT', payload: 4})
});

// The 'connect' take a Container and returns a high order component 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);