import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import reducer, { initialState } from './reducers';

const generateStore = (state = initialState) => {
  const middlewaresDev = [];

  if (process.env.NODE_ENV === 'development') {
    middlewaresDev.push(logger);
  }

  const middlewares = [thunkMiddleware];
  return createStore(
    reducer,
    state,
    compose(
      applyMiddleware(...middlewares, ...middlewaresDev),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
};

const store = generateStore();

export default store;
