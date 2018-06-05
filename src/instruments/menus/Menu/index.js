'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Row, Logo, H2 } from '../../../instruments'
import s from './styles.scss'

const Menu = ({ className }) => {
  return (
    <Row className={classnames(s.menu, className)} justify="flex-start">
      <Logo />
      <H2>My Org ></H2>
      <H2>My deployment</H2>
    </Row>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
}

export default Menu
