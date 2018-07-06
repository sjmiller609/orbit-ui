import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table } from 'instruments'

import Data from '../Data'
import Item from './Item'
import Empty from './Empty'

const List = ({ workspaces, search }) => {
  const button = {
    text: 'New Workspace',
    to: '/workspaces/new',
  }

  return (
    <Table className={s.list} search={search} button={button} Empty={Empty}>
      {workspaces && workspaces.map(t => <Item key={t.id} workspace={t} />)}
    </Table>
  )
}

List.propTypes = {
  workspaces: PropTypes.array,
  search: PropTypes.object,
}

export default Data(List)
