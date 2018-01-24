import React from 'react';

const history = props => {
  const history = props.history;
  const listHistory = history.map( action =>
    <div>{action.initial} {action.type === 'ADD' ? '+' : '-'} {action.value} = {action.result}</div>
  );

  return (
    <div className="history">
      <h3>List of actions</h3>
      <pre>{listHistory}</pre>
    </div>
  );
};

export default history;