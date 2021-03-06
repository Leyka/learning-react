// Import react and redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Import the Components
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay';
import CounterButton from  '../../components/CounterButton/CounterButton';
import CounterInput from '../../components/CounterInput/CounterInput';
import History from '../../components/History/History';
// Import the action creators
import * as actionCreators from '../../store/actions/actionCreators';

/**
 * The main Container which wraps all the presentational components
 */
class Counter extends Component {
  render() {
    return (
      <div>
        <small>-- Counter Container --</small>
        <h3>Counter Manager</h3>
        <p>This <a href="https://github.com/Leyka/learning-react/tree/master/react-redux">small project</a> is to learn how React, Redux, and react-redux works together</p>
        <CounterDisplay result={this.props.result}/>
        <CounterInput change={this.props.onInputChange} />
        <CounterButton text={'Add'} click={this.props.onAddCounter} />
        <CounterButton text={'Subtract'} click={this.props.onSubtractCounter} />
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
  onAddCounter: () => dispatch(actionCreators.addToCounter()),
  onSubtractCounter: () => dispatch(actionCreators.subtractToCounter()),
  onInputChange: value => dispatch(actionCreators.saveInputValue(value))
});

// The 'connect' take a Container and returns a high order component 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);