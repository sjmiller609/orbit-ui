'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { MenuList, Item } from 'instruments'

import s from './styles.scss'

const Menu = ({ menu }) => {
  return (
    <MenuList className={s.menu}>
      {menu.map(m => (
        <Item key={m.id} to={'#' + m.id}>
          {m.text}
        </Item>
      ))}
    </MenuList>
  )
}

Menu.propTypes = {
  menu: PropTypes.array,
}

export default Menu
