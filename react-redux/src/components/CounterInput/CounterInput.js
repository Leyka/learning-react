import React from 'react';
import './CounterInput.css';

/**
 * Controlled form : https://reactjs.org/docs/forms.html
 * It will basically use state to pass data
 * @param props
 * @returns {*} JSX
 */
const counterInput = props => (
  <div className="counterInput"> 
    <small>-- CounterInput Component --</small>
    <input type="number" autoFocus defaultValue="0" onChange={e => props.change(e.target.value)}/>
  </div>
);

export default counterInput;
