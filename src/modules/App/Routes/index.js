import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Start from '../Start'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Start} />
      {/* TODO: Add 404 */}
      <Route component={Start} />
    </Switch>
  )
}

export default Routes
