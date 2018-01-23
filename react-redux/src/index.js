import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/** redux and react-redux stuff */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/counterReducer';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));