import {createStore, compose, applyMiddleware} from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './index'

const configureStore = () => {
  const production = process.env.NODE_ENV === 'production'
  let middlewares = []

  if (!production) {
    middlewares = [reduxImmutableStateInvariant(), ...middlewares]
  }

  return createStore(
    rootReducer,
    undefined,
    production
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares))
  )
}

export default configureStore
