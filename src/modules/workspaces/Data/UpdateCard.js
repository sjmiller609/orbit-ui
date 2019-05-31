'use strict'
import React from 'react'
import api from './api'

import { Mutation } from 'instruments'

// Mutation to update customer info with associated stripeCustomerId in Stripe
const UpdateCard = Component => {
  class UpdateCard extends React.Component {
    render() {
      return (
        <Mutation
          gql={api.UpdateCard}
          success="Payment Method Updated Successfully!"
          track="Payment Method Updated">
          {({ mutate }) => {
            const newProps = {
              ...this.props,
              onSubmit: async vars => {
                const { token } = await this.props.stripe.createToken({
                  name: vars.name,
                })
                const query = {
                  name: api.Card,
                  type: 'card',
                  vars: {
                    id: this.props.workspace.id,
                    stripeCustomerId: this.props.workspace.stripeCustomerId,
                  },
                }
                mutate({
                  variables: {
                    id: this.props.workspace.id,
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
            return <Component {...newProps} />
          }}
        </Mutation>
      )
    }
  }

  return UpdateCard
}

export default UpdateCard
