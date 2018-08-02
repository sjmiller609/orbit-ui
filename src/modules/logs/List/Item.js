'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow, Box, Mini } from 'instruments'
import { format } from './helpers'

const Item = ({ log, className }) => {
  const log2 = format(log.log, s)
  const columns = [
    <Box key="0" align="flex-start" className={s.log}>
      <Mini>{Array.isArray(log2) ? log2.map(el => el) : log2}</Mini>
    </Box>,
  ]

  return (
    <TableRow className={classnames(s.item, className)} columns={columns} />
  )
}

Item.propTypes = {
  log: PropTypes.object,
  className: PropTypes.string,
}

export default Item
