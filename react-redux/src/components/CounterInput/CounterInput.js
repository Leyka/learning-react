import React from 'react';
import './CounterInput.css';

const counterInput = props => (
  <div className="counterInput"> 
    <small>-- CounterInput Component --</small>
    <input type="number" autoFocus defaultValue="0" onChange={props.change}/>
  </div>
);

export default counterInput;
