import * as React from 'react'
import { Route, IndexRoute } from 'react-router'
import Identify from './components/Identify'
import App from './containers/App'
import Schedules from './components/Schedules'
import Days from './components/Days'

export default (
  <Route path="/">
    <IndexRoute component={Identify} />
    <Route path=":token/:name" component={App}>
      <IndexRoute component={Schedules}/>
      <Route path=":id" component={Days} />
    </Route>
  </Route>
)