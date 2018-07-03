import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ userId, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props2 => {
        if (userId) {
          return (
            <Redirect
              to={{
                pathname: '/teams',
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
  userId: PropTypes.string,
}

export default AuthRoute
