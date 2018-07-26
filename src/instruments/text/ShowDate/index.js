'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

//TODO: add formatting options
const ShowDate = ({ date, className, seconds }) => {
  if (!date) return null
  const d = new Date(date)
  const now = new Date()
  let today
  let options = {
    month: 'long',
    day: 'numeric',
  }

  // show year if different
  if (d.getFullYear() !== now.getFullYear()) options.year = 'numeric'
  else {
    if (d.getMonth() === now.getMonth()) {
      // today
      if (d.getUTCDate() === now.getUTCDate()) {
        today = 'Today, '
        options = {
          hour: 'numeric',
          minute: 'numeric',
        }
        // this month
      } else options.weekday = 'short'
    }
  }

  if (seconds) {
    options.hour = 'numeric'
    options.minute = 'numeric'
    options.second = 'numeric'
  }

  const date2 = !today
    ? d.toLocaleDateString('en-US', options)
    : d.toLocaleTimeString('en-US', options)

  return (
    <span className={classnames(s.date, className)}>
      {today}
      {date2}
    </span>
  )
}

ShowDate.propTypes = {
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  weekday: PropTypes.bool,
  seconds: PropTypes.bool,
  className: PropTypes.string,
}

export default ShowDate
