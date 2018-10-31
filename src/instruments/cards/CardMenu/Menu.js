'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Card, MenuList, Item } from 'instruments'

import s from './styles.scss'

const Menu = ({ menu, active, title, id, scrollTo, menuList, className }) => {
  return (
    <Card id={id} title={title} className={classnames(s.menu, className)}>
      <MenuList {...menuList}>
        {menu.map((m, i) => (
          <React.Fragment key={m.id + i.toString()}>
            {m.newForm && <div className={s.border} />}
            <Item
              to={m.to}
              onClick={m.id ? () => scrollTo(m.id) : null}
              active={active === m.id}>
              {m.text}
            </Item>
          </React.Fragment>
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
  scrollTo: PropTypes.func,
  menuList: PropTypes.object,
}

export default Menu
