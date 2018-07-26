'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import { Row, H3, Icon } from 'instruments'

const Nav = ({ selected, className }) => {
  return (
    <Row className={s.nav} justify="flex-start">
      <H3>
        <Icon icon="scheduler" /> Webserver
      </H3>
      <H3>
        <Icon icon="scheduler" /> Scheduler
      </H3>
    </Row>
  )
}

Nav.propTypes = {
  selected: PropTypes.string,
  className: PropTypes.string,
}

export default Nav
