import React, { Component } from 'react';
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay';
import CounterButton from  '../../components/CounterButton/CounterButton';
import CounterInput from '../../components/CounterInput/CounterInput';
import History from '../../components/History/History';

import { connect } from 'react-redux';

class Counter extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * Trying to bind for example this.props.currentValue = e.target.value
   * But doesn't work for now
   * @param e Event
   */
  handleInputChange(e) {
    this.props.currentValue = e.target.value
  }

  render() {
    return (
      <div>
        <small>-- Counter Container --</small>
        <CounterDisplay counter={this.props.counterValue}/>
        <CounterInput change={this.handleInputChange}/>
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
  counterValue: state.counter,
  history: state.history
});


// Also map all the dispatches, again to propTypes of 'Counter'
const mapDispatchToProps = dispatch => ({
  /* TODO : Bind the payloads with real data (e.target.value of the input) */
  onAddCounter: () => dispatch({type: 'ADD', payload: 5}),
  onSubstractCounter: () => dispatch({type: 'SUBSTRACT', payload: 4})
});

// The 'connect' take a Container and returns a high order component 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);