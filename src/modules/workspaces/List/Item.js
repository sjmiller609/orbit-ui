'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { charLimit } from '../../../helpers/format'

import { TableRow, Box, Row, P, H3, B, Tag, Icon } from 'instruments'

const Item = ({ workspace, className }) => {
  const columns = [
    <Box key="0" className={s.icon}>
      <Icon icon="stars" />
    </Box>,
    <Row key="1" justify="flex-start" className={s.title}>
      <H3>{workspace.label}</H3>
    </Row>,
    <Box
      key="2"
      align="flex-start"
      className={classnames(s.log, !workspace.description && s.noMin)}>
      <P className={s.subTitle}>{charLimit(workspace.description, 75)}</P>
    </Box>,
    <React.Fragment key="3">
      {workspace.deploymentCount > 0 && (
        <Box align="flex-end" className={s.deploymentCount}>
          <Tag>
            <Icon icon="dag" title="Deployments" />
            <B>{workspace.deploymentCount}</B>
          </Tag>
        </Box>
      )}
    </React.Fragment>,
  ]

  const to = '/workspaces/' + workspace.id

  return (
    <TableRow
      className={classnames(s.item, className)}
      columns={columns}
      to={to}
    />
  )
}

Item.propTypes = {
  workspace: PropTypes.object,
  className: PropTypes.string,
}

export default Item
