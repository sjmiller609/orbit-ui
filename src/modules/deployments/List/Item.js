'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow, Box, P, Mini, H3, ShowDate, Airflow } from 'instruments'

const Item = ({ deployment, className }) => {
  const columns = [
    <Box key="0" className={s.icon}>
      <Airflow className={s.rotate} />
    </Box>,
    <Box key="1" align="flex-start" className={s.title}>
      <H3>{deployment.label}</H3>
      <P>{deployment.releaseName}</P>
    </Box>,
    <Box key="2" align="flex-start" className={s.log}>
      <P className={s.subTitle}>Deployed</P>
      <Mini>
        <ShowDate date={deployment.createdAt} />
      </Mini>
    </Box>,
  ]

  const to = '/deployments/' + deployment.releaseName

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
