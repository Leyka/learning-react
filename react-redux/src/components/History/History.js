import React from 'react';

const history = props => {
  const history = props.history;
  console.log('type of history', typeof history, history);
  console.log(history);
  const listHistory = history.map((action, index) =>
    <li key={'action_' + index}>{action}</li>
  );

  return (
    <div className="history">
      <h3>List of actions</h3>
      <ul>{listHistory}</ul>
    </div>
  )
};

export default history;