import * as React from 'react'
import { IProps, IParams } from '../types'

export interface AppParams {
  token: string
  name: string
}

export interface AppProps extends IProps, IParams<{}, AppParams> {}

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    )
  }
}

export default App