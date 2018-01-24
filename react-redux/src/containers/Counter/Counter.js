import React, { Component } from 'react';
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay';
import CounterButton from  '../../components/CounterButton/CounterButton';
import CounterInput from '../../components/CounterInput/CounterInput';
import History from '../../components/History/History';

import { connect } from 'react-redux';

class Counter extends Component {

  render() {
    return (
      <div>
        <small>-- Counter Container --</small>
        <CounterDisplay result={this.props.result}/>
        <CounterInput change={this.props.onInputChange} />
        <CounterButton text={'Add'} click={this.props.onAddCounter} />
        <CounterButton text={'Substract'} click={this.props.onSubstractCounter} />
        <hr/>
        <History history={this.props.history}/>
      </div>
    );
  }
}

// Map the global store to propTypes of 'Counter' container
const mapStateToProps = state => ({
  result: state.result,
  history: state.history
});


// Also map all the dispatches, again to propTypes of 'Counter'
const mapDispatchToProps = dispatch => ({
  onAddCounter: () => dispatch({type: 'ADD'}),
  onSubstractCounter: () => dispatch({type: 'SUBSTRACT'}),
  onInputChange: (value) => dispatch({type: 'INPUT_CHANGE', payload: value})
});

// The 'connect' take a Container and returns a high order component 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);