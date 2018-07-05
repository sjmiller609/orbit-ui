import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table } from 'instruments'

import Data from 'modules/teams/Data'
import Item from './Item'
import Empty from './Empty'

const List = ({ teams, search }) => {
  const users = (teams && teams[0] && teams[0].users) || []
  const button = {
    text: 'Invite',
    to: '/users/new',
  }
  return (
    <Table className={s.list} search={search} button={button} Empty={Empty}>
      {users.map(t => <Item key={t.id} user={t} />)}
    </Table>
  )
}

List.propTypes = {
  teams: PropTypes.array,
  search: PropTypes.object,
}

export default Data(List)
