import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import createStore from './utils/create-store';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
// import ProgressBar from './components/ProgressBar';
import PreRegisterForm from './components/PreRegisterForm';

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = createStore(initialState, history);

const url = new URL(window.location.href);
const code = url.searchParams.get('referrer');
if (code) {
  localStorage.setItem('code', code);
}

// ========================================================
// Render Setup
// ========================================================
ReactDOM.render(
  <Provider store={store}>
    <PreRegisterForm />
  </Provider>,
  document.getElementById('rootpopup')
);

// const progress = url.searchParams.get('progress');

// if (progress) {
//   ReactDOM.render(
//     <Provider store={store}>
//       <ProgressBar />
//     </Provider>,
//     document.getElementById('rootprogress')
//   );
// }
registerServiceWorker();
