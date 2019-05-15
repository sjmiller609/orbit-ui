'use strict'
import React from 'react'
import api from 'modules/deployments/Data/api'
import { Mutation, CardError } from 'instruments'
import { handleError, trimError } from './helpers'

const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateDeployment}
        success="Deployment alerts updated successfully."
        track="Deployment Alerts Updated"
        errorMsg={trimError}
        voidError>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              const { id, properties = {} } = vars
              const emails = properties.alert_emails
              const variables = {
                id,
                payload: {
                  properties: {
                    alert_emails: emails ? JSON.stringify(emails) : null,
                  },
                },
                sync: false,
              }
              mutate({
                variables,
              })
            },
          }
          // handle api errors
          const err = handleError(error)
          if (err) newProps.error = err
          else if (error) return <CardError />

          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return Update
}

export default Update
