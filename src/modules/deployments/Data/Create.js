'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Create as Mutation, GetData } from 'instruments'

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
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  type: 'airflow',
                  workspaceId: getData.workspaceId,
                  ...vars,
                },
              })
            },
          }
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
