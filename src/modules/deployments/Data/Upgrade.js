'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Upgrade as Mutate, CardError } from 'instruments'

import { handleError, trimError } from './helpers'

const Upgrade = Component => {
  const Upgrade = props => {
    const query = {
      name: api.Deployments,
      type: 'deployments',
    }
    return (
      <Mutate
        gql={api.UpgradeDeployment}
        redirect={`/workspaces/${props.deployment.workspace.id}/deployments`}
        success="Deployment upgraded successfully."
        track="Deployment Upgraded"
        query={query}
        errorMsg={trimError}>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: vars,
                refetchQueries: [
                  {
                    query: query.name,
                    variables: vars.queryVars, // need to get workspaceId for deployments query
                  },
                ],
              })
            },
          }
          // handle api errors
          const err = handleError(error)
          if (err) newProps.error = err
          else if (error) return <CardError />
          return <Component {...newProps} />
        }}
      </Mutate>
    )
  }

  Upgrade.propTypes = {
    deployment: PropTypes.object,
  }

  return Upgrade
}

export default Upgrade
