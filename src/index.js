import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Loader } from 'tectonic';

import App from './components/app';

import createManager from './manager';
import createStore from './store';

const store = createStore();
const manager = createManager(store);

ReactDOM.render(
  <Provider store={store}>
    <Loader manager={ manager }>
      <App />
    </Loader>
  </Provider>,
  document.getElementById('root')
);
