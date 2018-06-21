import React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'

import NoMatch from '../NoMatch'
import Start from '../Start'
import { Pageview, GetData } from '../../../instruments'

// get module routes
import deployments from '../../deployments/Routes'
import { default as teams, team } from '../../teams/Routes'

import TeamRoute from './TeamRoute'

const routes = [
  {
    path: '/',
    component: Start,
    exact: true,
  },
  ...teams,
  {
    path: '/404',
    component: NoMatch,
    exact: true,
  },
  {
    component: NoMatch,
  },
]

// protected by teamId
const teamRoutes = [...team, ...deployments]

const Routes = ({ getData }) => {
  return (
    <React.Fragment>
      <Route component={Pageview} />
      <Switch>
        {teamRoutes.map((route, i) => (
          <TeamRoute key={i} teamId={getData.teamId} {...route} />
        ))}
        {/* Must be last */}
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    </React.Fragment>
  )
}

Routes.propTypes = {
  getData: PropTypes.object,
}

export default GetData(Routes)
