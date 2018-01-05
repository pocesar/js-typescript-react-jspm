'use strict'

import React from 'react'
import createStore from './store'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import Main from './components/main'

const store = createStore()

export default (
  <Provider store={store}>
    <Router history={history}>
      <Main />
    </Router>
  </Provider>
)