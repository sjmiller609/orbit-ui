'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow, Box, P, Mini, H3, H4 } from '../../../instruments'

const Item = ({ deployment, className }) => {
  const columns = [
    <Box key="1" align="flex-start" className={s.title}>
      <H3>{deployment.title}</H3>
      <H4>{deployment.release_name}</H4>
    </Box>,
    <Box key="2" align="flex-start" className={s.log}>
      <P className={s.subTitle}>Deployed by Peter Maffey</P>
      <Mini>May 25, 1943</Mini>
    </Box>,
  ]

  const to = '/deployments/' + deployment.release_name

  return (
    <TableRow
      className={classnames(s.item, className)}
      columns={columns}
      to={to}
    />
  )
}

Item.propTypes = {
  deployment: PropTypes.object,
  className: PropTypes.string,
}

export default Item
