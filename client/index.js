// entry point client side
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../public/style.css';

ReactDOM.render(
  <Provider>
    <div>Hello World! This is my wikistack with React</div>
  </Provider>,
  document.getElementById('app')
);
