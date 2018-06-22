'use strict'
import React from 'react'
import api from './api'

import { Delete as Mutate } from '../../../instruments'

const Delete = Component => {
  const Delete = props => {
    const query = {
      name: api.Deployments,
      type: 'deployments',
    }
    return (
      <Mutate
        gql={api.DeleteDeployment}
        redirect="/deployments"
        success="Deployment deleted successfully."
        track="Deployment Deleted"
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: vars,
                refetchQueries: [
                  {
                    query: query.name,
                    variables: vars.queryVars, // need to get teamId for deployments query
                  },
                ],
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutate>
    )
  }

  return Delete
}

export default Delete
