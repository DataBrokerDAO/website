import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import createStore from './utils/create-store';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import TokenSale from './components/TokenSale';
// import { URL } from 'whatwg-url';

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = createStore(initialState, history);

// Using this old school way, because even with a whatwg-url polyfill I couldn't get it to work on IE.
const url = {};
const location = window.location.href.split('#');
location[0].replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
  url[key] = value;
});
if (url) {
  const ref = url.ref;
  if (ref) {
    localStorage.setItem('ref', ref);
  }
  const code = url.referrer;
  if (code) {
    localStorage.setItem('code', code);
  }
}

// const url = new URL(window.location.href);
// if (url.searchParams) {
//   const ref = url.searchParams && url.searchParams.get('ref');
//   if (ref) {
//     localStorage.setItem('ref', ref);
//   }
//   const code = url.searchParams.get('referrer');
//   if (code) {
//     localStorage.setItem('code', code);
//   }
// }

localStorage.setItem('referrer', document.referrer);

// ========================================================
// Render Setup
// ========================================================

ReactDOM.render(
  <Provider store={store}>
    <TokenSale />
  </Provider>,
  document.getElementById('root')
);

//registerServiceWorker();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(registration => {
    registration.unregister();
  });
}
