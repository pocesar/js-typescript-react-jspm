import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { connect, DispatchProp } from 'react-redux'
import * as RActions from '../actions'

export interface Props extends RouteComponentProps<any>, DispatchProp<RActions.State> {
  add: number
}

export class HelloWorld extends React.Component<Props, any> {
  add = () => {
    this.props.dispatch!(RActions.Add())
  }

  sub = () => {
    this.props.dispatch!(RActions.Sub())
  }

  hi = () => {
    this.props.history.push('/hi')
  }

  render() {
    return (
      <div>
        <label>Hello World! {this.props.add}</label>
        <button onClick={this.add}>Add</button>
        <button onClick={this.sub}>Sub</button>
        <button onClick={this.hi}>Hi</button>
      </div>
    )
  }
}

export default withRouter(connect<{}, {}, {}, RActions.AllState>((state) => {
  return {
    add: state.state.add
  }
})(HelloWorld))