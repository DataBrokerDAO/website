import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import createStore from './utils/create-store';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import TokenSale from './components/TokenSale';
// import { URL } from 'whatwg-url';

// activate raven
import './utils/raven';

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = createStore(initialState, history);

// Safari, in Private Browsing Mode, looks like it supports localStorage but all calls to setItem
// throw QuotaExceededError. We're going to detect this and just silently drop any calls to setItem
// to avoid the entire page breaking, without having to do a check at each usage of Storage.
if (typeof localStorage === 'object') {
  try {
    localStorage.setItem('localStorage', 1);
    localStorage.removeItem('localStorage');
  } catch (e) {
    Storage.prototype._setItem = Storage.prototype.setItem;
    Storage.prototype.setItem = function() {};
    console.log(
      'Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.'
    );
  }
}

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
  const lang = url.lang;
  if (lang) {
    localStorage.setItem('dbdaolang', lang);
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

if (!window.intl) {
  require.ensure(
    ['intl', 'intl/locale-data/jsonp/en.js', 'intl/locale-data/jsonp/ar.js'],
    require => {
      require('intl');
      require('intl/locale-data/jsonp/en.js');
      require('intl/locale-data/jsonp/ar.js');
      ReactDOM.render(
        <Provider store={store}>
          <TokenSale />
        </Provider>,
        document.getElementById('root')
      );
    }
  );
} else {
  ReactDOM.render(
    <Provider store={store}>
      <TokenSale />
    </Provider>,
    document.getElementById('root')
  );
}

//registerServiceWorker();

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.ready.then(registration => {
//     registration.unregister();
//   });
// }
