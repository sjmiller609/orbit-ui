import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table, Console } from 'instruments'

import Item from './Item'
import Empty from './Empty'

const List = ({ deployment, logs, search }) => {
  return (
    <Table className={s.list} search={search} Container={Console}>
      {logs && logs.map((l, i) => <Item key={l.id || i} log={l} />)}
    </Table>
  )
}

List.propTypes = {
  deployment: PropTypes.object,
  logs: PropTypes.array,
  search: PropTypes.object,
}

export default List
