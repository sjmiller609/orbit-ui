import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'
import Auth from './Auth'
import Workspace from './Workspace'

export const OnError = from => (
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
          component,
          OnError: Err,
        }
        if (!workspaceId) return <Auth {...newProps} />

        newProps.vars = {
          workspaceId,
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
}

export default Protected