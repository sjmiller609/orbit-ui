'use strict'
import React from 'react'
import api from './api'

import { Mutation } from '../../../instruments'

const Create = Component => {
  const Create = props => {
    const query = {
      gql: api.Deployments,
      result: 'deployments',
    }
    return (
      <Mutation
        gql={api.CreateDeployment}
        redirect="/deployments"
        success="New deployment created successfully."
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  type: 'airflow',
                  version: '0.2.1', //TODO: This will get set by the api
                  ...vars,
                },
                refetchQueries: [{ query: query.gql }],
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
