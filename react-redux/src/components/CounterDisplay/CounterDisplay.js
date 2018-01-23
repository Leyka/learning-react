import React from 'react'; 
import './CounterDisplay.css';

const counterDisplay = props => (
  <div className="counterDisplay">
    <h2>The current counter is</h2>
    <h1>{props.counter}</h1>
  </div>
);

export default counterDisplay;