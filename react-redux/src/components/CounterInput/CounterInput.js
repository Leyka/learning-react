import React from 'react';
import './CounterInput.css';

const counterInput = props => (
  <div className="counterInput"> 
    <small>-- CounterInput Component --</small>
    <input type="number" autoFocus placeholder="Number"/>
  </div>
);

export default counterInput;
