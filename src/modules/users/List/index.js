import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table } from 'instruments'

import UsersData from '../Data/List'
import InvitesData from '../Data/Invites'
import Item from './Item'
import Empty from './Empty'

const InviteList = ({ invites }) =>
  invites !== undefined &&
  invites.map(t => <Item key={t.id} user={t} pending role={t.role} />)
const Invites = InvitesData(InviteList)

const UserList = ({ users }) =>
  users !== undefined &&
  users.map(t => <Item key={t.id} user={t} role={t.role} />)
const Users = UsersData(UserList)

const List = ({ workspaceId, search }) => {
  const button = {
    text: 'Invite',
    to: '/users/new',
  }

  return (
    <Table className={s.list} search={search} button={button} Empty={Empty}>
      <Users workspaceId={workspaceId} search={search} />
      <Invites workspaceId={workspaceId} search={search} />
    </Table>
  )
}

List.propTypes = {
  superuser: PropTypes.bool,
  workspaces: PropTypes.array,
  workspaceId: PropTypes.string,
  search: PropTypes.object,
}

export default List
