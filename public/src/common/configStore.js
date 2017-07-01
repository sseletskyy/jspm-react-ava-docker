import promiseMiddleware from 'redux-promise'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import rootReducer from './rootReducer'
import logger from 'middleware/logger'

export function configureStore (initialState, history) {
  let middleware = [thunk, promiseMiddleware, routerMiddleware(history)]

  middleware = [...middleware, logger, reduxImmutableStateInvariant()]

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )
}
