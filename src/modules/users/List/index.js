import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table } from 'instruments'

import Data from 'modules/workspaces/Data'
import Item from './Item'
import Empty from './Empty'

const List = ({ workspaces, search }) => {
  const users = (workspaces && workspaces[0] && workspaces[0].users) || []
  const invites = (workspaces && workspaces[0] && workspaces[0].invites) || []

  const roleForUser = uid => {
    const rb = workspaces[0].roleBindings.find(
      rb => rb.user && rb.user.id == uid
    )
    return rb ? rb.role : null
  }

  const button = {
    text: 'Invite',
    to: '/users/new',
  }
  return (
    <Table className={s.list} search={search} button={button} Empty={Empty}>
      {users.map(t => <Item key={t.id} user={t} role={roleForUser(t.id)} />)}
      {invites.map(t => <Item key={t.id} user={t} pending role={t.role} />)}
    </Table>
  )
}

List.propTypes = {
  superuser: PropTypes.bool,
  workspaces: PropTypes.array,
  search: PropTypes.object,
}

export default Data(List)
