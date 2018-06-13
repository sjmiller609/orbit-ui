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

const Routes = () => {
  return (
    <Switch>{routes.map((route, i) => <Route key={i} {...route} />)}</Switch>
  )
}

export default Routes
