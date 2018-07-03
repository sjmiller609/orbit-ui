import React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'

import { ScrollToTop, Pageview, GetData, Load } from 'instruments'

// get module routes
import deployments from 'modules/deployments/Routes'
import { default as teams, team } from 'modules/teams/Routes'
import { default as auth, otherAuthRoutes } from 'modules/auth/Routes'

import TeamRoute from './TeamRoute'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'

const routes = [
  ...otherAuthRoutes,
  {
    path: '/404',
    component: Load(() => import('../NoMatch')),
    exact: true,
  },
  {
    component: Load(() => import('../NoMatch')),
  },
]

// redirect if logged in
const authRoutes = [...auth]

// protected by userId
const protectedRoutes = [...teams]

// also protected by teamId
const teamRoutes = [...team, ...deployments]

const Routes = ({ getData }) => {
  return (
    <React.Fragment>
      <Route component={Pageview} />
      <Route component={ScrollToTop} />
      <Switch>
        {authRoutes.map((route, i) => (
          <AuthRoute
            key={i}
            userId={getData.userId}
            teamId={getData.teamId}
            {...route}
          />
        ))}
        {teamRoutes.map((route, i) => (
          <TeamRoute
            key={i}
            userId={getData.userId}
            teamId={getData.teamId}
            {...route}
          />
        ))}
        {protectedRoutes.map((route, i) => (
          <ProtectedRoute key={i} userId={getData.userId} {...route} />
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
