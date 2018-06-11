'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Delete as Mutate } from '../../../instruments'

const Delete = Component => {
  const Delete = ({ onSuccess, ...otherProps }) => {
    const query = {
      gql: api.Deployments,
      result: 'deployments',
    }
    return (
      <Mutate
        gql={api.DeleteDeployment}
        redirect="/deployments"
        onSuccess={onSuccess}
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...otherProps,
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

  Delete.propTypes = {
    onSuccess: PropTypes.func,
  }

  return Delete
}

export default Delete
