import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Start from '../Start'
import deployments from '../../deployments/Routes'

const routes = [
  {
    path: '/',
    component: Start,
    exact: true,
  },
  ...deployments,
]

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
)

const Routes = () => {
  return (
    <Switch>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </Switch>
  )
}

export default Routes
