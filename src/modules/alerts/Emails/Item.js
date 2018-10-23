'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow, Box, B } from 'instruments'

const Item = ({ email, className, ...props }) => {
  const columns = [
    <Box key="0" align="flex-start" className={s.title}>
      <B>{email}</B>
    </Box>,
  ]

  return (
    <TableRow
      {...props}
      className={classnames(s.item, className)}
      columns={columns}
    />
  )
}

Item.propTypes = {
  email: PropTypes.string,
  className: PropTypes.string,
}

export default Item
