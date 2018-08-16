import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'

const AutoLogin = ({ auth, workspaceId, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props2 => {
        if (auth) {
          // if passed `?source=cli` show /token route
          const cli =
            props2.location.search &&
            ~props2.location.search.indexOf('source=cli')

          const to = !cli
            ? {
                pathname: workspaceId ? '/deployments' : '/workspaces',
                state: { from: props2.location },
              }
            : '/token'

          return <Redirect to={to} />
        }
        return <Component {...props2} />
      }}
    />
  )
}

AutoLogin.propTypes = {
  component: PropTypes.func,
  auth: PropTypes.bool,
  workspaceId: PropTypes.string,
}

export default AutoLogin
