'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow, Box, Mini, ShowDate } from 'instruments'

const Item = ({ log, className }) => {
  const columns = [
    <Box key="0" align="flex-start" className={s.log}>
      <Mini>
        <ShowDate date={log.date} seconds className={s.date} /> {log.log}
      </Mini>
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
