'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Mutation, CardError } from 'instruments'
import { handleError, trimError } from './helpers'

// Mutation to update customer info with associated stripeCustomerId in Stripe
const UpdateCard = Component => {
  class UpdateCard extends React.Component {
    render() {
      return (
        <Mutation
          gql={api.UpdateCard}
          success="Payment Method Updated Successfully!"
          track="Payment Method Updated"
          errorMsg={trimError}>
          {({ mutate, error }) => {
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
            const err = handleError(error)
            if (err) newProps.error = err
            else if (error) return <CardError />
            return <Component {...newProps} />
          }}
        </Mutation>
      )
    }
  }
  UpdateCard.propTypes = {
    workspace: PropTypes.object,
    stripe: PropTypes.object,
  }

  return UpdateCard
}

export default UpdateCard
