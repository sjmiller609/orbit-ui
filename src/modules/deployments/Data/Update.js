'use strict'
import React from 'react'
//import PropTypes from 'prop-types'
import api from './api'

import { Update as Mutate } from '../../../instruments'

const Update = Component => {
  const Update = props => {
    const query = {
      gql: api.Deployments,
      result: 'deployments',
    }
    return (
      <Mutate
        gql={api.UpdateDeployment}
        success="Deployment updated successfully."
        track="Deployment Updated"
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

  // Update.propTypes = {
  //   onSuccess: PropTypes.func,
  // }

  return Update
}

export default Update
