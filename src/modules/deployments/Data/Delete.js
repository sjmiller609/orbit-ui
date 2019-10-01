'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import api from './api'

import { Delete as Mutate, CardError } from 'instruments'

import { handleError, trimError } from './helpers'
import Self from '../../self/Data'

const Delete = Component => {
  const Delete = props => {
    const query = {
      name: api.Deployments,
      type: 'deployments',
    }
    const email = props.self.user.emails[0].address
    const deployment = props.deployment.label

    const redirect = localStorage.getItem('admin')
      ? `/admin/deployments`
      : `/workspaces/${props.workspaceId}`

    return (
      <Mutate
        gql={api.DeleteDeployment}
        redirect={redirect}
        success="Deployment deleted successfully."
        track={{
          name: 'Deployment Deleted',
          props: {
            email,
            deployment,
          },
        }}
        query={query}
        errorMsg={trimError}
        voidError>
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
  Delete.propTypes = {
    self: PropTypes.object,
    deployment: PropTypes.object,
  }

  return withRouter(Self(Delete))
}

export default Delete
