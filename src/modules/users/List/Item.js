'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TableRow, Box, P, Mini, H3, ShowDate, Avatar, Tag } from 'instruments'
import { unConstantize } from 'helpers/format'
import { getProfile } from '../Data/helpers'

const Item = ({ user, pending, className, role, to }) => {
  const profile = getProfile(user)

  if (!to) {
    to = pending ? '/pending/' : '/users/'
    to += encodeURIComponent(profile.username)
  }

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
    <Box key="2" align="flex-start" className={s.role}>
      <P>{role && unConstantize(role).replace(/ /g, '\u00A0')}</P>
    </Box>,
    <Box key="3" align="flex-start" className={s.log}>
      <P className={s.subTitle}>{pending ? 'Invited' : 'Joined'}</P>
      <Mini>
        <ShowDate date={user.createdAt} />
      </Mini>
    </Box>,
  ]

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
  role: PropTypes.string,
  to: PropTypes.string,
  admin: PropTypes.bool,
}

export default Item
