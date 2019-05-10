'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Mutation, CardError } from 'instruments'
import { handleError, trimError } from './helpers'

const UpdateRole = Component => {
  const UpdateRole = ({ ...props }) => {
    return (
      <Mutation
        gql={api.UpdateRole}
        success="User Role Updated"
        track="User Role Updated"
        errorMsg={trimError}
        voidError>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  workspaceId: vars.workspaceId,
                  email: vars.email,
                  role: vars.role,
                },
              })
              props.role.set(vars.role)
              location.reload(true) // Current workaround for bug in the Select form
            },
          }
          // handle api errors
          console.log(error)
          const err = handleError(error)
          if (err) newProps.error = err
          else if (error) return <CardError />
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }
  UpdateRole.propTypes = {
    role: PropTypes.object,
  }

  return UpdateRole
}

export default UpdateRole
