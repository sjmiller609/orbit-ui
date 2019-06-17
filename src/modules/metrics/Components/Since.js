'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import moment from 'moment'
import { Dropdown, MenuList, Item } from 'instruments'

const Since = ({ set, get }) => {
  const lastTime = moment()
    .subtract(get(), 'minutes')
    .fromNow(true)

  let msg = `Last ${lastTime}`
  if (lastTime === 'a day') msg = `Last 24 hours`

  return (
    <Dropdown
      className={s.since}
      right
      selector={<div className={s.button}>{msg}</div>}>
      <MenuList label="View metrics from:">
        <Item onClick={() => set(15)}>Last 15 minutes</Item>
        <Item onClick={() => set(30)}>Last 30 minutes</Item>
        <Item onClick={() => set(60)}>Last 1 hour</Item>
        <Item onClick={() => set(60 * 3)}>Last 3 hours</Item>
        <Item onClick={() => set(60 * 6)}>Last 6 hours</Item>
        <Item onClick={() => set(60 * 12)}>Last 12 hours</Item>
        <Item onClick={() => set(60 * 24)}>Last 24 hours</Item>
        <Item onClick={() => set(60 * 48)}>Last 2 days</Item>
        <Item onClick={() => set(60 * 168)}>Last 7 days</Item>
        <Item onClick={() => set(60 * 336)}>Last 14 days</Item>
      </MenuList>
    </Dropdown>
  )
}

Since.propTypes = {
  get: PropTypes.func,
  set: PropTypes.func,
}

export default Since
