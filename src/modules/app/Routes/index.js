import React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'

import { ScrollToTop, Pageview, GetData, Load } from 'instruments'

// get module routes
import deployments from 'modules/deployments/Routes'
import { default as workspaces, workspace } from 'modules/workspaces/Routes'
import { default as auth, otherAuthRoutes } from 'modules/auth/Routes'
import users from 'modules/users/Routes'

import WorkspaceRoute from './WorkspaceRoute'
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
const protectedRoutes = [...workspaces]

// also protected by workspaceId
const workspaceRoutes = [...workspace, ...deployments, ...users]

const Routes = ({ getData }) => {
  return (
    <React.Fragment>
      <Route component={Pageview} />
      <Route component={ScrollToTop} />
      <Switch>
        {authRoutes.map((route, i) => (
          <AuthRoute
            key={i}
            auth={getData.auth}
            workspaceId={getData.workspaceId}
            {...route}
          />
        ))}
        {workspaceRoutes.map((route, i) => (
          <WorkspaceRoute
            key={i}
            auth={getData.auth}
            workspaceId={getData.workspaceId}
            {...route}
          />
        ))}
        {protectedRoutes.map((route, i) => (
          <ProtectedRoute key={i} auth={getData.auth} {...route} />
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
