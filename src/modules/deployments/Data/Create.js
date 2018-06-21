'use strict'
import React from 'react'
import api from './api'

import { Create as Mutation } from '../../../instruments'

const Create = Component => {
  const Create = props => {
    const query = {
      name: api.Deployments,
      type: 'deployments',
    }
    return (
      <Mutation
        gql={api.CreateDeployment}
        redirect={data => '/deployments/' + data.releaseName}
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
                  teamId: 'ab214ce7-79e2-4873-b491-44120d7bcee4',
                  version: '0.2.1', //TODO: This will get set by the api
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

  return Create
}

export default Create
