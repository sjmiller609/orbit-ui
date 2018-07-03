import React from 'react'
import PropTypes from 'prop-types'

import { Redirect } from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'

const TeamRoute = ({ teamId, component: Component, ...props }) => {
  return (
    <ProtectedRoute
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
