import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table, Console, LoadingDots, Mini } from 'instruments'

import Item from './Item'

const List = ({ deployment, logs, search }) => {
  return (
    <Table className={s.list} search={search} Container={Console}>
      {logs && logs.map((l, i) => <Item key={l.id || i} log={l} />)}
      {(!logs || !logs.length) && (
        <Mini className={s.waiting}>
          Waiting for logs<LoadingDots />
        </Mini>
      )}
    </Table>
  )
}

List.propTypes = {
  deployment: PropTypes.object,
  logs: PropTypes.array,
  search: PropTypes.object,
}

export default List
