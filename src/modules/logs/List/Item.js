'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Mini } from 'instruments'
import { format } from './helpers'

const Item = ({ log, className }) => {
  const log2 = format(log.log, s)

  return (
    <Mini className={classnames(s.log, className)}>
      {Array.isArray(log2) ? log2.map(el => el) : log2}
    </Mini>
  )
}

Item.propTypes = {
  log: PropTypes.object,
  className: PropTypes.string,
}

export default Item
