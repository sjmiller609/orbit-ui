'use strict'
import React from 'react'
import api from 'modules/deployments/Data/api'
import { Mutation } from 'instruments'

const Update = Component => {
  const Update = props => {
    return (
      <Mutation
        gql={api.UpdateDeployment}
        success="Deployment alerts updated successfully."
        track="Deployment Alerts Updated"
        voidError>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              const { id, properties } = vars

              const variables = {
                id,
                properties: {
                  alert_emails: JSON.stringify(properties.alert_emails),
                },
                sync: true,
              }
              console.log(variables)
              mutate({
                variables,
              })
            },
          }
          // handle api errors
          // const err = handleError(error)
          // if (err) newProps.error = err
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }

  return Update
}

export default Update
