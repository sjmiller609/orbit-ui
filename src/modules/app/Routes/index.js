import React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'

import { ScrollToTop, Pageview, GetData, Load } from 'instruments'

// get module routes
import deployments from 'modules/deployments/Routes'
import { default as workspaces, workspace } from 'modules/workspaces/Routes'
import { default as auth, otherAuthRoutes } from 'modules/auth/Routes'
import users from 'modules/users/Routes'

import Protected from './Protected'
import AutoLogin from './AutoLogin'

const routes = [
  ...otherAuthRoutes,
  {
    path: '/(404|500|503|houston-down)',
    component: Load(() => import('../NoMatch')),
    exact: true,
  },
  {
    component: Load(() => import('../NoMatch')),
  },
]

// redirect if logged in
const autoLoginRoutes = [...auth]

// protected by userId
const authRoutes = [...workspaces]

// also protected by workspaceId
const workspaceRoutes = [...workspace, ...deployments, ...users]

const Routes = ({ getData }) => {
  return (
    <React.Fragment>
      <Route component={Pageview} />
      <Route component={ScrollToTop} />
      <Switch>
        {autoLoginRoutes.map((route, i) => (
          <AutoLogin
            key={i}
            auth={getData.auth}
            workspaceId={getData.workspaceId}
            {...route}
          />
        ))}
        {workspaceRoutes.map((route, i) => (
          <Protected
            key={i}
            auth={getData.auth}
            workspaceId={getData.workspaceId}
            {...route}
          />
        ))}
        {authRoutes.map((route, i) => (
          <Protected key={i} auth={getData.auth} {...route} />
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
