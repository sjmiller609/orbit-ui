'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Update as Mutate } from '../../../instruments'

const Update = Component => {
  const Update = ({ onSuccess, ...otherProps }) => {
    const query = {
      gql: api.Deployments,
      result: 'deployments',
    }
    return (
      <Mutate gql={api.UpdateDeployment} onSuccess={onSuccess} query={query}>
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

  Update.propTypes = {
    onSuccess: PropTypes.func,
  }

  return Update
}

export default Update
