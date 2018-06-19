import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Start from '../Start'
import NoMatch from '../NoMatch'

import deployments from '../../deployments/Routes'
import { Pageview } from '../../../instruments'

const routes = [
  {
    path: '/',
    component: Start,
    exact: true,
  },
  ...deployments,
  {
    component: NoMatch,
  },
]

const Routes = () => {
  return (
    <React.Fragment>
      <Route component={Pageview} />
      <Switch>{routes.map((route, i) => <Route key={i} {...route} />)}</Switch>
    </React.Fragment>
  )
}

export default Routes
