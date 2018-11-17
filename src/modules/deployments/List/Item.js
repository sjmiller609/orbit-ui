'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow, Box, P, Mini, H3, ShowDate, Airflow } from 'instruments'
import { lt } from '../helpers'

const Item = ({ deployment, latestVersion, className }) => {
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
    <Box key="3" align="flex-start" className={s.upgrade}>
      <P className={s.subTitle}>
        {lt(deployment.version, latestVersion) ? 'Upgrade Available!' : ''}
      </P>
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
  latestVersion: PropTypes.string,
  className: PropTypes.string,
}

export default Item
