'use strict'

import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import rootReducer, { initialState } from './reducers'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import { autoRehydrate, createTransform, persistStore } from 'redux-persist'
import { asyncLocalStorage } from 'redux-persist/storages'

export default () => {

  const createStoreWithMiddleware = applyMiddleware(
    routerMiddleware(history),
  )

  const store = createStore(rootReducer, undefined, compose(createStoreWithMiddleware, autoRehydrate()))

  const transform = (state: any, key: any) => {
    return {
      ...state
    }
  }

  persistStore(store, {
    transforms: [
      createTransform(transform, transform)
    ],
    storage: asyncLocalStorage,
    whitelist: ['state']
  })

  return syncHistoryWithStore(browserHistory, store)
}