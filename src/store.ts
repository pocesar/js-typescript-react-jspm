import { createStore, applyMiddleware, Store } from 'redux'
import rootReducer, { initialState } from './reducers'
import { routerMiddleware } from 'react-router-redux'
import { PersistState } from 'redux-persist/es/types'
import { persistStore, Persistor, persistCombineReducers } from 'redux-persist'
import session from 'redux-persist/es/storage/session'

export {
  Persistor,
  Store,
  PersistState
}

export default (history: any) => {

  const createStoreWithMiddleware = applyMiddleware(
    routerMiddleware(history),
  )

  const store = createStore(
    persistCombineReducers({
      whitelist: ['state', 'router'],
      storage: session,
      key: 'root'
    }, rootReducer),
    createStoreWithMiddleware
  )

  const persistor = persistStore(store)

  return { persistor, store }
}