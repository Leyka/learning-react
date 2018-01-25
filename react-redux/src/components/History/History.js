import React from 'react';
import "./History.css";

const history = props => {
  const history = props.history;
  const listHistory = history.reverse().map( (action, index) =>
    <p key={'action_' + index}>
      {action.initial} {action.type === 'ADD' ? '+' : '-'} {action.value} = {action.newResult}
    </p>
  );

  return (
    <div className="history">
      <small>-- History Component --</small>
      <h3>List of {listHistory.length} action(s)</h3>
      <pre>{listHistory}</pre>
    </div>
  );
};

export default history;