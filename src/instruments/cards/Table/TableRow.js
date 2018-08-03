'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Row, Box, Link, Icon } from 'instruments'

const TableRow = ({ columns, to, className, wrap }) => {
  const row = (
    <Row justify="space-between">
      <Row justify="flex-start" className={s.fields} wrap={wrap} full>
        {Array.isArray(columns) ? columns.map(el => el) : columns}
      </Row>
      {to && (
        <Box auto className={s.arrowCol}>
          <Icon key="arrow" icon="arrow" className={s.arrow} />
        </Box>
      )}
    </Row>
  )
  if (!to) return row
  return (
    <Link to={to} className={classnames(s.tableRow, className)}>
      {row}
    </Link>
  )
}

TableRow.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  wrap: PropTypes.bool,
}

export default TableRow
