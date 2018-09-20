'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow, Box, P, Mini, H3, ShowDate, Icon } from 'instruments'

const Item = ({ serviceAccount, path, className }) => {
  const columns = [
    <Box key="0">
      <Icon icon="satellite" className={s.icon} />
    </Box>,
    <Box key="1" align="flex-start" className={s.title}>
      <H3>{serviceAccount.label}</H3>
      <P>{serviceAccount.category}</P>
    </Box>,
    <Box key="2" align="flex-start" className={s.log}>
      <P className={s.subTitle}>
        {serviceAccount.lastUsedAt ? 'Last Used' : 'Created At'}
      </P>
      <Mini>
        <ShowDate
          date={serviceAccount.lastUsedAt || serviceAccount.createdAt}
        />
      </Mini>
    </Box>,
  ]

  const to = path + '/' + serviceAccount.id

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
}

export default Item
