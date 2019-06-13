'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Card, Block1, Airflow, Button } from 'instruments'

const Activation = ({ title, text, canUpdateIAM }) => {
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
        <Button to={button.to} disabled={!canUpdateIAM}>
          {button.text}
        </Button>
      </Block1>
    </Card>
  )
}

Activation.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  canUpdateIAM: PropTypes.bool,
}

export default Activation
