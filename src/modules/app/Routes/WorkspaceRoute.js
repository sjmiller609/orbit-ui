import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

// check for both workspaceId and userId
// NOTE: Tried nesting these routes, but the props overwrite

const WorkspaceRoute = ({ auth, workspaceId, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props2 => {
        if (!auth) {
          return (
            <Redirect
              to={{
                pathname: '/logout/silent',
                state: { from: props2.location },
              }}
            />
          )
        }
        if (!workspaceId) {
          return (
            <Redirect
              to={{
                pathname: '/workspaces',
                state: { from: props2.location },
              }}
            />
          )
        }
        return <Component {...props2} />
      }}
    />
  )
}

WorkspaceRoute.propTypes = {
  component: PropTypes.func,
  workspaceId: PropTypes.string,
  auth: PropTypes.bool,
}

export default WorkspaceRoute
