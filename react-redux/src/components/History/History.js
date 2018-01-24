import React from 'react';

const history = props => {
  const history = props.history;
  const listHistory = history.map( (action, index) =>
    <p key={'action_' + index}>
      {action.initial} {action.type === 'ADD' ? '+' : '-'} {action.value} = {action.result}
    </p>
  );

  return (
    <div>
      <small>-- History Component --</small>
      <h3>List of {listHistory.length} action(s)</h3>
      <pre>{listHistory}</pre>
    </div>
  );
};

export default history;