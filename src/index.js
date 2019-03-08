import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import store from './store/store.js';
import { Provider } from 'react-redux';
import handleSearchChange from './actions/search.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  () => handleSearchChange('redux tutorials')(store.dispatch)
);
