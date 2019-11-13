import React from 'react'
import PropTypes from 'prop-types'

import { CardForm, Form, TextField } from 'instruments'
import CardSection from './CardElement'

import AddCard from '../Data/AddCard'
import { injectStripe } from 'react-stripe-elements'

import s from './styles.scss'

//Form that shows if customer has not yet input payment information
class BillingForm extends React.Component {
  state = {
    stripeReady: false,
  }

  catchStripeReady = e => {
    this.setState({
      stripeReady: e.complete,
    })
  }

  render() {
    const { form } = this.props
    const { stripeReady } = this.state

    return (
      <CardForm
        title="Billing"
        button={{
          save: form.save && stripeReady,
          text: 'Submit',
        }}>
        <TextField
          name="Company"
          type="text"
          placeholder="Company"
          label="Company"
          {...form.field('company')}
          focus
        />
        <TextField
          name="Billing Email"
          type="email"
          placeholder="Billing Email Address"
          label="Billing Email"
          {...form.field('billingEmail')}
          required
        />
        <TextField
          name="Name"
          type="text"
          placeholder="Name on Card"
          label="Name on Card"
          {...form.field('name')}
          required
        />
        <div className={s.cardSection}>
          <CardSection stripeReady={this.catchStripeReady} />
        </div>
      </CardForm>
    )
  }
}

BillingForm.propTypes = {
  save: PropTypes.bool,
  form: PropTypes.object,
}

export default injectStripe(AddCard(Form(BillingForm)))
