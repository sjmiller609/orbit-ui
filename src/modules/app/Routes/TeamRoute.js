import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

// check for both teamId and userId
// NOTE: Tried nesting these routes, but the props overwrite

const TeamRoute = ({ auth, teamId, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props2 => {
        if (!auth) {
          return (
            <Redirect
              to={{
                pathname: '/logout/silent',
                state: { from: props2.location },
              }}
            />
          )
        }
        if (!teamId) {
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

TeamRoute.propTypes = {
  component: PropTypes.func,
  teamId: PropTypes.string,
  auth: PropTypes.bool,
}

export default TeamRoute
