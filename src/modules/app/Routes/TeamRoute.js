import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

// check for both teamId and userId
// NOTE: Tried nesting these routes, but the props overwrite

const TeamRoute = ({ userId, teamId, component: Component, ...props }) => {
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
  userId: PropTypes.string,
}

export default TeamRoute
