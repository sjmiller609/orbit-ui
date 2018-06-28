import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table } from 'instruments'

import Data from '../Data'
import Item from './Item'
import Empty from './Empty'

const List = ({ teams, search }) => {
  const button = {
    text: 'New Team',
    to: '/teams/new',
  }

  return (
    <Table className={s.list} search={search} button={button} Empty={Empty}>
      {teams && teams.map(t => <Item key={t.id} team={t} />)}
    </Table>
  )
}

List.propTypes = {
  teams: PropTypes.array,
  search: PropTypes.object,
}

export default Data(List)
