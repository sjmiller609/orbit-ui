'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Block1, Airflow } from '../../../instruments'

const Empty = ({ button }) => {
  return (
    <Block1
      left={<Airflow className={s.airflowImg} dagSize={s.dag} />}
      title="Ready for takeoff?"
      text="Deploy a private instance of Apache Airflow in minutes, and get straight to writing custom workflows.">
      {button}
    </Block1>
  )
}

Empty.propTypes = {
  button: PropTypes.element,
}

export default Empty
