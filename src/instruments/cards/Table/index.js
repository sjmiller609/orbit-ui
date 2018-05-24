'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card } from '../../../instruments'
import s from './styles.scss'

const Table = ({ children, className }) => {
  return (
    <Card className={classnames(s.table, className)}>
      <React.Fragment>
        {Array.isArray(children) ? children.map(el => el) : children}
      </React.Fragment>
    </Card>
  )
}

Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
}

export default Table
