import { createAction, Action } from 'redux-actions'

export interface State {
  // TODO: fill me
}

export interface AllState {
  state: State;
}

export const InitialState = createAction('INITIAL_STATE', () => {
  return
})