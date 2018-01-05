import { createAction, Action } from 'redux-actions'
import { RouterProps } from 'react-router'

export interface State {
  // TODO: fill me
  add: number;
}

export interface AllState {
  state: State;
}

export const InitialState = createAction('INITIAL_STATE', () => {
  return
})

export const Add = createAction('ADD', () => {
  return 1
})

export const Sub = createAction('ADD', () => {
  return -1
})