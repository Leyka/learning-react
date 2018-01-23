import React from 'react'; 
import './CounterButton.css'; 

const counterButton = props => (
  <div className="counterButton">
    <small>-- CounterButton Component -- </small>
    <button>{props.text}</button>
  </div>
);

export default counterButton;


