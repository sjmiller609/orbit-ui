import React from 'react'
import PropTypes from 'prop-types'

import { CardForm, Form, TextField, Box, H3, Field } from 'instruments'
import CardSection from './CardElement'

import UpdateCard from '../Data/UpdateCard'
import GetCard from './GetCard'
import PaymentCard from 'react-payment-card-component'

import { injectStripe } from 'react-stripe-elements'

import s from './styles.scss'

//Form that shows if customer has already input payment info
class UpdateBilling extends React.Component {
  render() {
    const { form, card } = this.props
    const cardNumber = '************' + card.last4
    const expirationDate = card.expMonth + '/' + card.expYear
    const cardBrand = card.brand.toLowerCase() //Stripe returns with a capital first letter adn the component requires a lowercase string
    return (
      <CardForm
        title="Billing"
        button={{
          save: form.save,
          text: 'Submit',
        }}>
        <Box>
          <H3>Current Card on File</H3>
          <div className={s.cardPadding}>
            <PaymentCard
              bank="default"
              brand={cardBrand}
              number={cardNumber}
              holderName={card.name}
              expiration={expirationDate}
              className={s.card}
            />
          </div>
        </Box>
        <Box>
          <H3>Update Your Information</H3>
          <TextField
            name="Company"
            type="text"
            placeholder={card.company}
            label="Company"
            {...form.field('company')}
            focus
          />
          <TextField
            name="Billing Email"
            type="text"
            placeholder={card.billingEmail}
            label="Billing Email"
            {...form.field('billingEmail')}
            required
          />
          <TextField
            name="Name"
            type="text"
            placeholder={card.name}
            label="Name on Card"
            {...form.field('name')}
            required
          />
        </Box>
        <div className={s.cardSection}>
          <CardSection />
        </div>
      </CardForm>
    )
  }
}

UpdateBilling.propTypes = {
  save: PropTypes.bool,
  form: PropTypes.object,
  card: PropTypes.object,
}

export default GetCard(injectStripe(UpdateCard(Form(UpdateBilling))))
