'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow, Box, P, Mini, H3, ShowDate } from 'instruments'

const Item = ({ serviceAccount, className }) => {
  const columns = [
    <Box key="0" className={s.icon}>
      {/* <Avatar className={s.avatar} url={profile.avatar} title={profile.name} /> */}
    </Box>,
    <Box key="1" align="flex-start" className={s.title}>
      <H3>{serviceAccount.label}</H3>
      <P>{serviceAccount.category}</P>
    </Box>,
    <Box key="2" align="flex-start" className={s.log}>
      <P className={s.subTitle}>Last Used</P>
      <Mini>
        <ShowDate date={serviceAccount.lastUsedAt} />
      </Mini>
    </Box>,
  ]

  const to = ''

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
}

export default Item
