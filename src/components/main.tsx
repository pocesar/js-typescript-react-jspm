import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter, RouteComponentProps } from 'react-router'
import { connect, DispatchProp } from 'react-redux'
import * as RActions from '../actions'
import HelloWorld from './hello-world'

export interface Props extends RouteComponentProps<any>, DispatchProp<RActions.State> {

}

interface State {

}

class Main extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Switch >
          <Route exact path="/" component={HelloWorld} />
          <Route path="/hi" render={() => <div>HI</div>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect()(Main))