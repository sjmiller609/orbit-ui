import React from 'react'
import PropTypes from 'prop-types'

import { CardElement } from 'react-stripe-elements'

//Stripe Card Element
class CardSection extends React.Component {
  render() {
    return (
      <label>
        <CardElement
          onChange={e => this.props.stripeReady(e)}
          style={{ base: { fontSize: '24px' } }}
        />
      </label>
    )
  }
}

CardSection.propTypes = {
  stripeReady: PropTypes.func,
}

export default CardSection
