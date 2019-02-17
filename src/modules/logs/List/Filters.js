'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import Component from './Component'
import Since from './Since'
import { Row } from 'instruments'

const Filters = ({ component, since }) => {
  return (
    <Row className={s.filters}>
      <Component {...component} />
      <Since {...since} />
    </Row>
  )
}

Filters.propTypes = {
  component: PropTypes.object,
  since: PropTypes.object,
}

export default Filters
