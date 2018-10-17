'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Create as Mutation, GetData } from 'instruments'
import { handleError } from './helpers'

const Create = Component => {
  const Create = ({ getData, ...props }) => {
    const query = {
      name: api.Deployments,
      type: 'deployments',
      vars: {
        workspaceId: getData.workspaceId,
      },
    }
    return (
      <Mutation
        gql={api.CreateDeployment}
        redirect={data => '/deployments/' + data.releaseName + '?loading'}
        success="New deployment created successfully."
        track="New Deployment Created"
        voidError
        query={query}>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              console.log(vars)
              mutate({
                variables: {
                  type: 'airflow',
                  workspaceId: getData.workspaceId,
                  ...vars,
                },
              })
            },
          }
          // handle api errors
          const err = handleError(error)
          if (err) newProps.error = err
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }
  Create.propTypes = {
    getData: PropTypes.object,
  }

  return GetData(Create, { workspaceId: true })
}

export default Create
