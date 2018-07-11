import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

const AutoLogin = ({ auth, workspaceId, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props2 => {
        if (auth) {
          return (
            <Redirect
              to={{
                pathname: workspaceId ? '/deployments' : '/workspaces',
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

AutoLogin.propTypes = {
  component: PropTypes.func,
  auth: PropTypes.bool,
  workspaceId: PropTypes.string,
}

export default AutoLogin
