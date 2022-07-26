import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import {createStore, compose, applyMiddleware} from "redux";
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import { spamFilter } from './redux/middleware';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, spamFilter),
  
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
