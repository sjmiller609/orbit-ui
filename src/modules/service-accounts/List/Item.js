'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { withRouter } from 'react-router-dom'
import { TableRow, Box, P, Mini, H3, ShowDate, Icon } from 'instruments'
import { unConstantize } from 'helpers/format'
import { entityTypes } from '../Data/helpers'

const Item = ({ serviceAccount, path, className }) => {
  const type = entityTypes({ type: serviceAccount.entityType })
  const columns = [
    <Box key="0">
      <Icon
        icon="satellite"
        className={s.icon}
        title={
          type.label[0].toUpperCase() +
          type.label.slice(1).toLowerCase() +
          ' service account'
        }
      />
      <Box className={s.type}>
        <Icon icon={type.icon} />
      </Box>
    </Box>,
    <Box key="1" align="flex-start" className={s.title}>
      <H3>{serviceAccount.label}</H3>
      <P>{serviceAccount.category}</P>
    </Box>,
    <Box key="2" align="flex-start" className={s.role}>
      <P>
        {unConstantize(serviceAccount.roleBinding.role).replace(/ /g, '\u00A0')}
      </P>
    </Box>,
    <Box key="3" align="flex-start" className={s.log}>
      <P className={s.subTitle}>
        {serviceAccount.lastUsedAt ? 'Last Used' : 'Created'}
      </P>
      <Mini>
        <ShowDate
          date={serviceAccount.lastUsedAt || serviceAccount.createdAt}
        />
      </Mini>
    </Box>,
  ]

  const to = `${path}/${serviceAccount.id}`

  return (
    <TableRow
      className={classnames(s.item, className)}
      columns={columns}
      to={to}
    />
  )
}

Item.propTypes = {
  serviceAccount: PropTypes.object,
  className: PropTypes.string,
  path: PropTypes.string,
  locationState: PropTypes.object,
}

export default withRouter(Item)
