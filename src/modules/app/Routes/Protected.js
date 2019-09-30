import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'
import Auth from './Auth'
import Workspace from './Workspace'

const OnError = from => (
  <Redirect
    to={{
      pathname: '/logout/silent',
      state: { from },
    }}
  />
)

const Protected = ({ auth, workspaceId, component, ...props }) => {
  return (
    <Route
      {...props}
      render={props2 => {
        const Err = <OnError from={props2.location} />
        if (!auth) return Err
        const newProps = {
          ...props2,
          permissions: props.permissions || {},
          component,
          OnError: Err,
        }
        if (!workspaceId) return <Auth {...newProps} />

        newProps.vars = {
          workspaceId: workspaceId || props2.params.workspaceId,
        }

        return <Workspace {...newProps} />
      }}
    />
  )
}

Protected.propTypes = {
  component: PropTypes.func,
  auth: PropTypes.bool,
  self: PropTypes.object,
  workspaceId: PropTypes.string,
  permissions: PropTypes.object,
}

export default Protected
