'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Row, Box, Link, Icon } from 'instruments'

const TableRow = ({ columns, to, className }) => {
  return (
    <Link to={to} className={classnames(s.tableRow, className)}>
      <Row justify="space-between">
        <Row justify="flex-start" className={s.fields} wrap full>
          {Array.isArray(columns) ? columns.map(el => el) : columns}
        </Row>
        {to && (
          <Box auto className={s.arrowCol}>
            <Icon key="arrow" icon="arrow" className={s.arrow} />
          </Box>
        )}
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
