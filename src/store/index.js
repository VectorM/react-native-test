import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import * as reducers from '../reducers';

const appReducers = combineReducers(reducers);

const logger = createLogger({ collapsed: true });

const middleware = applyMiddleware(logger, thunk);

const store = createStore(appReducers, middleware)

export default store;
