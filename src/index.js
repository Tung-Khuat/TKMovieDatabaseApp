import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory, browserHistory } from 'react-router';
import routes from './routes';
import App from './components/app';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk, logger())(createStore);
export const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
