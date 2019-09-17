'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow, Box, P, Mini, H3, ShowDate, Button } from 'instruments'

const Item = ({ deployment, className }) => {
  const to = '/deployments/' + deployment.releaseName
  const config = to + '/configure'

  const workspaceId = deployment.workspace.id

  const columns = [
    <Box key="0" align="flex-start" className={s.title}>
      <H3>{deployment.label}</H3>
      <P>{deployment.releaseName}</P>
    </Box>,
    <Box key="2" align="flex-start" className={s.log}>
      <P className={s.subTitle}>Deployed</P>
      <Mini>
        <ShowDate date={deployment.createdAt} />
      </Mini>
    </Box>,
    <Box key="3" align="flex-start" className={s.log}>
      <P className={s.subTitle}>Updated</P>
      <Mini>
        <ShowDate date={deployment.updatedAt} />
      </Mini>
    </Box>,
    <Box key="1" align="flex-start" className={s.log}>
      <P className={s.subTitle}>Version</P>
      <P>{deployment.version}</P>
    </Box>,
    <Box key="4" align="flex-start" className={s.upgrade}>
      <Button
        to={{
          pathname: config,
          state: { workspaceId }, // pass workspaceId to deployment module
        }}>
        Config
      </Button>
    </Box>,
  ]

  return (
    <TableRow className={classnames(s.item, className)} columns={columns} />
  )
}

Item.propTypes = {
  deployment: PropTypes.object,
  latestVersion: PropTypes.string,
  className: PropTypes.string,
}

export default Item
