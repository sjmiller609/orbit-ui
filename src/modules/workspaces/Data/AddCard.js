'use strict'
import React from 'react'
import api from './api'

import { Mutation, CardError } from 'instruments'
import { handleError, trimError } from './helpers'
// Mutation to add stripeCustomerId to Workspace table, create customer in stripe, and change app state
const AddCard = Component => {
  class AddCard extends React.Component {
    render() {
      return (
        <Mutation
          gql={api.AddCard}
          success="Payment Method Added Successfully!"
          track="Payment Method Added"
          errorMsg={trimError}
          voidError>
          {({ mutate, error }) => {
            const newProps = {
              ...this.props,
              onSubmit: async vars => {
                const { token } = await this.props.stripe.createToken({
                  name: vars.name,
                })
                const query = {
                  name: api.Workspaces,
                  type: 'workspaces',
                  vars: {
                    workspaceId: vars.workspaceId,
                    withUsers: true,
                  },
                }
                mutate({
                  variables: {
                    id: vars.id,
                    billingEmail: vars.billingEmail,
                    company: vars.company,
                    token: token.id,
                  },
                  refetchQueries: [
                    {
                      query: query.name,
                      variables: query.vars,
                    },
                  ],
                })
              },
            }
            const err = handleError(error)
            if (err) newProps.error = err
            else if (error) return <CardError />
            return <Component {...newProps} />
          }}
        </Mutation>
      )
    }
  }

  return AddCard
}

export default AddCard
