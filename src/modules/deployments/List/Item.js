'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow } from '../../../instruments'

const Item = ({ deployment, className }) => {
  const columns = [
    <p key="1">{deployment.title}</p>,
    <p key="2">{deployment.release_name}</p>,
    <p key="3">logs</p>,
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
