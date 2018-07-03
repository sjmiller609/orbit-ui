'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Menu, SubMenu } from 'instruments'
import s from './styles.scss'

const Header = ({ level1, level2, subMenu, profile, className }) => {
  return (
    <div className={classnames(s.header, className)}>
      <Menu
        level1={level1}
        level2={level2}
        className={s.menu}
        profile={profile}
      />
      <div className={s.hr} />
      <SubMenu menu={subMenu} className={s.subMenu} />
    </div>
  )
}

Header.propTypes = {
  level1: PropTypes.object,
  level2: PropTypes.object,
  profile: PropTypes.object,
  subMenu: PropTypes.array,
  className: PropTypes.string,
}

export default Header
