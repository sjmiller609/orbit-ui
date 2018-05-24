'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Row, Box, Link, Icon } from '../../../instruments'

const Column = (el, i) => (
  <Box key={i} className={s.column}>
    {el}
  </Box>
)

const TableRow = ({ columns, to, className }) => {
  return (
    <Link to={to}>
      <Row
        className={classnames(s.tableRow, className)}
        justify="space-between">
        {Array.isArray(columns)
          ? columns.map((el, i) => Column(el, i))
          : columns}
        {Column(<Icon key="arrow" icon="arrow" className={s.arrow} />)}
      </Row>
    </Link>
  )
}

TableRow.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
}

export default TableRow
