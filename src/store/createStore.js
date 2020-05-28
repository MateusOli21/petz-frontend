import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? applyMiddleware(logger, ...middlewares)
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
