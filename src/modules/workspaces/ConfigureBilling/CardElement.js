import React from 'react'
import { CardElement } from 'react-stripe-elements'

//Stripe Card Element
class CardSection extends React.Component {
  render() {
    return (
      <label>
        <CardElement style={{ base: { fontSize: '24px' } }} />
      </label>
    )
  }
}

export default CardSection
