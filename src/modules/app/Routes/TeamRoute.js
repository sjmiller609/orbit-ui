import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

const TeamRoute = ({ teamId, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props2 =>
        teamId ? (
          <Component {...props2} />
        ) : (
          <Redirect
            to={{
              pathname: '/teams',
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

TeamRoute.propTypes = {
  component: PropTypes.func,
  teamId: PropTypes.string,
}

export default TeamRoute
