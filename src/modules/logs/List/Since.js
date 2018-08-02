'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import { ShowDate, Dropdown, MenuList, Item } from 'instruments'

const Since = ({ get, set, since }) => {
  let msg = 'All time'
  if (since === 'today') msg = 'Today'
  else if (get) {
    const now = new Date()
    const diff = Math.abs(now.getTime() - get.getTime())
    const min = Math.floor(diff / 60000)
    msg = `Past ${min} minutes`
  }
  return (
    <Dropdown
      className={s.since}
      right
      selector={<div className={s.button}>{msg}</div>}>
      <MenuList label="View logs from:">
        <Item onClick={() => set(10)}>Past 10 minutes</Item>
        <Item onClick={() => set(60)}>Past hour</Item>
        <Item onClick={() => set('today')}>Today</Item>
        <Item onClick={() => set()}>All time</Item>
      </MenuList>
    </Dropdown>
  )
}

Since.propTypes = {
  get: PropTypes.instanceOf(Date),
  set: PropTypes.func,
  since: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Since
