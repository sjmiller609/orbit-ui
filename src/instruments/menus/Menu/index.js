'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Row, Logo, H2, Link, Level1 } from '../../../instruments'
import s from './styles.scss'

const Menu = ({ level1, level2, className }) => {
  return (
    <Row className={classnames(s.menu, className)} justify="flex-start">
      <Logo />
      <Level1 {...level1} active={!level2} />
      {level2 && (
        <Link to={level2.to}>
          <H2>{level2.text}</H2>
        </Link>
      )}
    </Row>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  level2: PropTypes.object,
  level1: PropTypes.object,
}

export default Menu
