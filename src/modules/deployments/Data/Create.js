'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Mutation } from '../../../instruments'

const Create = Component => {
  const Create = ({ onSuccess, ...otherProps }) => {
    const query = {
      gql: api.Deployments,
      result: 'deployments',
    }
    return (
      <Mutation gql={api.CreateDeployment} onSuccess={onSuccess} query={query}>
        {({ mutate }) => {
          const newProps = {
            ...otherProps,
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

  Create.propTypes = {
    onSuccess: PropTypes.func,
  }

  return Create
}

export default Create
