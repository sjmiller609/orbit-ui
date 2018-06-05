'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Menu } from '../../../instruments'
import s from './styles.scss'

const Header = ({ children, className }) => {
  return (
    <div className={classnames(s.header, className)}>
      <Menu />
      {children}
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
}

export default Header
