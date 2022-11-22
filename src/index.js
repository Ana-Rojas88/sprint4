import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Router from './router/Router';
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router />
    </Provider>
  </React.StrictMode>
);
