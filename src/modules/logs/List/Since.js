'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import { P, ShowDate } from 'instruments'

const Since = ({ time, className }) => {
  return (
    <P className={s.since}>
      Since <ShowDate date={time} />
    </P>
  )
}

Since.propTypes = {
  time: PropTypes.instanceOf(Date),
  className: PropTypes.string,
}

export default Since
