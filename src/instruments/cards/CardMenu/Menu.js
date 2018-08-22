'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Card, MenuList, Item } from 'instruments'

import s from './styles.scss'

const Menu = ({ menu, active, title, id, className }) => {
  return (
    <Card id={id} title={title} className={classnames(s.menu, className)}>
      <MenuList>
        {menu.map(m => (
          <Item key={m.id} to={'#' + m.id} active={active === m.id}>
            {m.text}
          </Item>
        ))}
      </MenuList>
    </Card>
  )
}

Menu.propTypes = {
  active: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  menu: PropTypes.array,
}

export default Menu
