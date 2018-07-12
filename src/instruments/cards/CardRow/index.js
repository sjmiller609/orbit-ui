'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Row } from 'instruments'

const CardRow = ({ children, className }) => {
  const blocks = Array.isArray(children) ? children : [children]

  return (
    <Row
      className={classnames(s.row, s[blocks.length], className)}
      align="flex-start"
      wrap>
      {blocks.map(el => el)}
    </Row>
  )
}

CardRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
}

export default CardRow
