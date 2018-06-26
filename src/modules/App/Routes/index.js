import React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'

import { ScrollToTop, Pageview, GetData, Load } from 'instruments'

// get module routes
import deployments from 'modules/deployments/Routes'
import { default as teams, team } from 'modules/teams/Routes'

import TeamRoute from './TeamRoute'

const routes = [
  {
    path: '/',
    component: Load(() => import('../Start')),
    exact: true,
  },
  ...teams,
  {
    path: '/404',
    component: Load(() => import('../NoMatch')),
    exact: true,
  },
  {
    component: Load(() => import('../NoMatch')),
  },
]

// protected by teamId
const teamRoutes = [...team, ...deployments]

const Routes = ({ getData }) => {
  return (
    <React.Fragment>
      <Route component={Pageview} />
      <Route component={ScrollToTop} />
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
