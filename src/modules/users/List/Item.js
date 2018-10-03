'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow, Box, P, Mini, H3, ShowDate, Avatar, Tag } from 'instruments'
import { getProfile } from '../Data/helpers'

const Item = ({ user, pending, className }) => {
  const profile = getProfile(user)

  const columns = [
    <Box key="0" className={s.icon}>
      <Avatar className={s.avatar} url={profile.avatar} title={profile.name} />
    </Box>,
    <Box key="1" align="flex-start" className={s.title}>
      <H3>{user.fullName}</H3>
      <P>
        {profile.username}
        {pending && <Tag className={s.tag}>pending</Tag>}
      </P>
    </Box>,
    <Box key="2" align="flex-start" className={s.log}>
      <P className={s.subTitle}>{pending ? 'Invited' : 'Joined'}</P>
      <Mini>
        <ShowDate date={user.createdAt} />
      </Mini>
    </Box>,
  ]

  let to = pending ? '/pending/' : '/users/'
  to += encodeURIComponent(profile.username)

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
  pending: PropTypes.bool,
  className: PropTypes.string,
}

export default Item
