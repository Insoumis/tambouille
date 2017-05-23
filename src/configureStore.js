import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import apiMiddleware from './apiMiddleware';

export default () => {
  const middlewares = [apiMiddleware];

  const store = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  );

  return store;
};
