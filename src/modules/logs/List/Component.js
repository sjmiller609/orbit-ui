'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import { Dropdown, MenuList, Item } from 'instruments'

const Component = ({ set, text }) => {
  return (
    <Dropdown
      className={s.component}
      right
      selector={<div className={s.button}>{text}</div>}>
      <MenuList label="View logs from:">
        <Item onClick={() => set('scheduler')}>Sheduler</Item>
        <Item onClick={() => set('webserver')}>Webserver</Item>
        <Item onClick={() => set('worker')}>Workers</Item>
      </MenuList>
    </Dropdown>
  )
}

Component.propTypes = {
  set: PropTypes.func,
  text: PropTypes.string,
}

export default Component
