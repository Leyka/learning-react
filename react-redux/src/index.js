import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/** redux and react-redux stuff */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducers/counterReducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /* Needed for Redux DevTools Extension */
);

// Each time the store changes, we console log
store.subscribe(() => {
  console.log('The store has changed (subscribe)', store.getState());
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));