import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import * as promise from 'redux-promise';
import IState from './models'
import * as reducers from './reducers'

// Casting the reducers object to any is needed as the "redux-actions" library
// has a stricter typing than "redux" making it otherwise incompatible
export default () => createStore(
  combineReducers<IState>(<any>reducers),
  applyMiddleware(thunk, promise)
)