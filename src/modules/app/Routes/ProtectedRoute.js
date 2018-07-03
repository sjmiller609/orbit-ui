import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ auth, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props2 => {
        if (!auth) {
          return (
            <Redirect
              to={{
                pathname: '/login',
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

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  auth: PropTypes.bool,
}

export default ProtectedRoute
