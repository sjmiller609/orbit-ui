'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import { Dropdown, MenuList, Item } from 'instruments'

const Component = ({ set, text, executor }) => {
  const msg = text === 'worker' ? 'workers' : text
  return (
    <Dropdown
      className={s.component}
      selector={<div className={s.button}>{msg}</div>}>
      <MenuList label="View logs from:">
        <Item onClick={() => set('scheduler')}>Scheduler</Item>
        <Item onClick={() => set('webserver')}>Webserver</Item>
        {executor !== 'LocalExecutor' && (
          <Item onClick={() => set('worker')}>Workers</Item>
        )}
      </MenuList>
    </Dropdown>
  )
}

Component.propTypes = {
  set: PropTypes.func,
  text: PropTypes.string,
  executor: PropTypes.string,
}

export default Component
