import { createStore, combineReducers, applyMiddleware } from 'redux';
import moduleAReducer from '../modules/ModuleA';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  diff: true
});

const reducers = combineReducers({
  moduleA: moduleAReducer
});

export default createStore(reducers, applyMiddleware(thunk, logger));
