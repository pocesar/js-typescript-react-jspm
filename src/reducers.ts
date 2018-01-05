import { routerReducer, RouterState, LOCATION_CHANGE } from 'react-router-redux'
import { handleActions, Action } from 'redux-actions'
import { AnyAction } from 'redux'
import * as RActions from './actions'

export {
  AnyAction,
  RouterState
}

export const initialState: RActions.State = {
  // TODO: fill me
  add: 0
}

export const StateReducer = handleActions<RActions.State>({
  // TODO: fill me

  // RESET
  [`${RActions.InitialState}`]: (state: RActions.State, action: any) => {
    return {
      ...initialState
    }
  },
  [`${RActions.Add}`]: (state: RActions.State, action: Action<number>) => {
    return {
      ...state,
      add: state.add + action.payload!
    }
  },
}, initialState)

export default ({
  state: StateReducer,
  router: routerReducer
})