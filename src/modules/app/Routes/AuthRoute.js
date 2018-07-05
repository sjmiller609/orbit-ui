import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ auth, teamId, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props2 => {
        if (auth) {
          return (
            <Redirect
              to={{
                pathname: teamId ? '/deployments' : '/teams',
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

AuthRoute.propTypes = {
  component: PropTypes.func,
  auth: PropTypes.bool,
  teamId: PropTypes.string,
}

export default AuthRoute
