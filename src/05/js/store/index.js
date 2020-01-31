import { createStore, combineReducers, applyMiddleware } from 'redux';
import moduleAReducer from '../modules/ModuleA';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  moduleA: moduleAReducer
});

export default createStore(reducers, applyMiddleware(thunk));
