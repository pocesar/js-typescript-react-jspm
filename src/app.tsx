import React from 'react'
import createStore from './store'
import { Provider } from 'react-redux'
import Main from './components/main'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { ConnectedRouter } from 'react-router-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

//const history = createMemoryHistory()
const history = createBrowserHistory()

const store = createStore(history)

export default (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <ConnectedRouter history={history}>
          <Main />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
)