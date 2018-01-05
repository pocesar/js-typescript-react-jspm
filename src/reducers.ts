import { combineReducers } from 'redux'
import { routerReducer, LOCATION_CHANGE } from 'react-router-redux'
import { handleActions, Action } from 'redux-actions'
import * as RActions from './actions'

export const initialState: RActions.State = {
  // TODO: fill me

}

const StateReducer = handleActions({
  // TODO: fill me

  // RESET
  [`${RActions.InitialState}`]: (state, action) => {
    return {
      ...initialState
    }
  },
}, initialState)

export default combineReducers<RActions.AllState>({
  state: StateReducer,
  routing: routerReducer
})