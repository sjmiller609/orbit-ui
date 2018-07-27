'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import { ShowDate, Dropdown, MenuList, Item } from 'instruments'

const Since = ({ time }) => {
  const now = new Date()
  const diff = Math.abs(now.getTime() - time.getTime())
  const min = Math.floor(diff / 60000)
  return (
    <Dropdown
      className={s.since}
      right
      selector={
        <div className={s.button}>
          {/* <ShowDate date={time} /> */}
          Past {min} minutes
        </div>
      }>
      <MenuList label="View logs from:">
        <Item to="/">Past 10 minutes</Item>
        <Item to="/">Past hour</Item>
        <Item to="/">Today</Item>
        <Item to="/">All time</Item>
      </MenuList>
    </Dropdown>
  )
}

Since.propTypes = {
  time: PropTypes.instanceOf(Date),
}

export default Since
