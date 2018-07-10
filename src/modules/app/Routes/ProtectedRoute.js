import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'
import SelfData from 'modules/self/Data'

export const ProtectedRedirect = from => (
  <Redirect
    to={{
      pathname: '/logout/silent',
      state: { from },
    }}
  />
)

const ProtectedRoute = ({ auth, self, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props2 => {
        if (!auth || !self) {
          return <ProtectedRedirect from={props2.location} />
        }

        return <Component {...props2} />
      }}
    />
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  auth: PropTypes.bool,
  self: PropTypes.object,
}

export default SelfData(ProtectedRoute)
