// entry point client side - can be named main.js
import React from 'react';
import { render } from 'react-dom'; // import ReactDOM from 'react-dom'; ReactDOM.render()
import { Provider } from 'react-redux';
import store from './store';
import '../public/style.css';
import Root from './components/Root';

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);
