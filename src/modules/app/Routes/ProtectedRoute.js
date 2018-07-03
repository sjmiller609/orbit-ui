import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ userId, component: Component, ...props }) => {
  console.log(Component)
  console.log(props)
  return (
    <Route
      {...props}
      render={props2 => {
        if (!userId) {
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
  userId: PropTypes.string,
}

export default ProtectedRoute
