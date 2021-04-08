import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './scss/App.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
