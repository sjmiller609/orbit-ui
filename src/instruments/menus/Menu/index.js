'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Row, Logo, H2, TeamDropdown } from '../../../instruments'
import s from './styles.scss'

const Menu = ({ level2, className }) => {
  return (
    <Row className={classnames(s.menu, className)} justify="flex-start">
      <Logo />
      <TeamDropdown />
      <H2>{level2}</H2>
    </Row>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  level2: PropTypes.string,
}

export default Menu
