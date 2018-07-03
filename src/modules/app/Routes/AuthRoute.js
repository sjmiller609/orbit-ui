import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ userId, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props2 =>
        userId ? (
          <Component {...props2} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props2.location,
              },
            }}
          />
        )
      }
    />
  )
}

AuthRoute.propTypes = {
  component: PropTypes.func,
  userId: PropTypes.string,
}

export default AuthRoute
