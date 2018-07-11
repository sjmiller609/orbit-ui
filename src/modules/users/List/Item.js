'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow, Box, P, Mini, H3, ShowDate, Avatar } from 'instruments'

const Item = ({ user, className }) => {
  const columns = [
    <Box key="0" className={s.icon}>
      <Avatar className={s.avatar} />
    </Box>,
    <Box key="1" align="flex-start" className={s.title}>
      <H3>{user.fullName}</H3>
      <P>{user.username}</P>
    </Box>,
    <Box key="2" align="flex-start" className={s.log}>
      <P className={s.subTitle}>Joined</P>
      <Mini>
        <ShowDate date={user.createdAt} />
      </Mini>
    </Box>,
  ]

  const to = '/users/' + encodeURIComponent(user.username)

  return (
    <TableRow
      className={classnames(s.item, className)}
      columns={columns}
      to={to}
    />
  )
}

Item.propTypes = {
  user: PropTypes.object,
  className: PropTypes.string,
}

export default Item
