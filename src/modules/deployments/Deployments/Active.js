'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Card, Block1, Airflow, Button } from 'instruments'

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const Activation = ({ title, text, canUpdateBilling }) => {
=======
const Activation = ({ title, text, canUpdateIAM }) => {
>>>>>>> Beghin to rework paywall to read off of isSuspended rather than stripeCustomerId
=======
const Activation = ({ title, text, canUpdateBilling }) => {
>>>>>>> Add billingEnabled config and set activity to read off of the correct configs
=======
const Activation = ({ title, text, canUpdateIAM }) => {
>>>>>>> Beghin to rework paywall to read off of isSuspended rather than stripeCustomerId
  const button = {
    text: 'Add a Payment Method',
    to: '/billing',
  }
  return (
    <Card className={s.item}>
      <Block1
        left={<Airflow className={s.airflowImg} dagSize={s.dag} />}
        title={title}
        text={text}
        className={s.list}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <Button disabled={!canUpdateBilling} to={button.to}>
=======
        <Button to={button.to} disabled={!canUpdateIAM}>
>>>>>>> Beghin to rework paywall to read off of isSuspended rather than stripeCustomerId
=======
        <Button disabled={!canUpdateBilling} to={button.to}>
>>>>>>> Add billingEnabled config and set activity to read off of the correct configs
=======
        <Button to={button.to} disabled={!canUpdateIAM}>
>>>>>>> Beghin to rework paywall to read off of isSuspended rather than stripeCustomerId
          {button.text}
        </Button>
      </Block1>
    </Card>
  )
}

Activation.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  canUpdateBilling: PropTypes.bool,
=======
  canUpdateIAM: PropTypes.bool,
>>>>>>> Beghin to rework paywall to read off of isSuspended rather than stripeCustomerId
=======
  canUpdateBilling: PropTypes.bool,
>>>>>>> Add billingEnabled config and set activity to read off of the correct configs
=======
  canUpdateIAM: PropTypes.bool,
>>>>>>> Beghin to rework paywall to read off of isSuspended rather than stripeCustomerId
}

export default Activation
