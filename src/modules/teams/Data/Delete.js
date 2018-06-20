'use strict'
import React from 'react'
// import PropTypes from 'prop-types'
import api from './api'

import { Delete as Mutate } from '../../../instruments'

const Delete = Component => {
  const Delete = props => {
    const query = {
      gql: api.Deployments,
      result: 'deployments',
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
                //  refetchQueries: [{ query: query.gql }],
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
