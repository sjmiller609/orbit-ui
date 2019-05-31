'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query } from 'instruments'

//Query to get card information for current customer and display it in the UpdateBilling form
const Card = Component => {
  const Card = ({ vars, skip, ...otherProps }) => {
    return (
      <Query gql={api.Card} vars={vars} skip={skip}>
        {({ data: { card } }) => {
          const newProps = {
            ...otherProps,
            card,
          }
          return <Component {...newProps} />
        }}
      </Query>
    )
  }

  Card.propTypes = {
    vars: PropTypes.object,
    skip: PropTypes.bool,
  }

  return Card
}

export default Card
