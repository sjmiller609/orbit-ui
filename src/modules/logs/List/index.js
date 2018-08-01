import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table, Console, LoadingDots, Mini } from 'instruments'

import Item from './Item'
import Since from './Since'
import Nav from './Nav'
import Data from '../Data'

class List extends React.Component {
  componentWillMount() {
    if (this.props.subscribeToMore) this.props.subscribeToMore()
  }
  render() {
    const { logs, search, start, type } = this.props
    return (
      <Table
        className={s.list}
        search={search}
        Container={Console}
        nav={<Nav selected={type} />}
        headerOptions={<Since time={start} />}>
        {logs && logs.map((l, i) => <Item key={l.id || i} log={l} />)}
        {(!logs || !logs.length) && (
          <Mini className={s.waiting}>
            Waiting for logs<LoadingDots />
          </Mini>
        )}
      </Table>
    )
  }
}

List.propTypes = {
  logs: PropTypes.array,
  search: PropTypes.object,
  type: PropTypes.string,
  start: PropTypes.instanceOf(Date),
  subscribeToMore: PropTypes.func,
}

export default Data(List)
