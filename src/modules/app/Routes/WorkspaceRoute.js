import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

import SelfData from 'modules/self/Data'
import WorkspaceData from 'modules/workspaces/Data'

import { ProtectedRedirect } from './ProtectedRoute'
// check for both workspaceId and userId
// NOTE: Tried nesting these routes, but the props overwrite

const WorkspaceRoute = ({
  auth,
  self,
  workspaces,
  component: Component,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={props2 => {
        if (!auth || !self) return <ProtectedRedirect from={props2.location} />
        if (!workspaces || !workspaces[0]) {
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
  workspaces: PropTypes.array,
  self: PropTypes.object,
  auth: PropTypes.bool,
}

export default SelfData(WorkspaceData(WorkspaceRoute))
