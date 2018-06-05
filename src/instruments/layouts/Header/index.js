'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Menu } from '../../../instruments'
import s from './styles.scss'

const Header = ({ level1, level2, subMenu, className }) => {
  return (
    <div className={classnames(s.header, className)}>
      <Menu level1={level1} level2={level2} />
    </div>
  )
}

Header.propTypes = {
  level1: PropTypes.object,
  level2: PropTypes.object,
  subMenu: PropTypes.array,
  className: PropTypes.string,
}

export default Header
