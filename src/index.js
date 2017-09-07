import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import createStore from './utils/create-store';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import TokenSale from './components/TokenSale';

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = createStore(initialState, history);

const url = new URL(window.location.href);
const ref = url.searchParams.get('ref');
if (ref) {
  localStorage.setItem('ref', ref);
}
const code = url.searchParams.get('referrer');
if (code) {
  localStorage.setItem('code', code);
}

// ========================================================
// Render Setup
// ========================================================

ReactDOM.render(
  <Provider store={store}>
    <TokenSale />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();