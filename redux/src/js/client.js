/**
 * Tutorial about vanilla Redux (without React) to understand the concepts
 * -- Redux --
 * Only one global store (one big javascript object)
 * Store is never mutated, we create new versions of this object
 * Wrap all react components in one "Provider component" which rerender when Store changes
 * Smart Component -> pass data from Store as Props to -> Dumb Component
 * Theses components trigger Actions
 * Reducers modify a piece of data of a the Store ( in an immutable way )
 */

import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + action.number;
    }
    case 'DECREMENT': {
      return state - action.number;
    }
  }
  return state;
};

const obj = 0;
const store = createStore(reducer, obj);

// Listen to the store
store.subscribe(() => {
  console.log('store changed', store.getState())
});


// Call actions
store.dispatch({type: 'INCREMENT', number: 1 });
store.dispatch({type: 'INCREMENT', number: 2 });
store.dispatch({type: 'INCREMENT', number: 3 });
store.dispatch({type: 'DECREMENT', number: 6 });