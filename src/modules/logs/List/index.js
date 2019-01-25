import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table, Console, LoadingDots, Mini } from 'instruments'

import Item from './Item'
import Since from './Since'
import Nav from './Nav'
import Data from '../Data'

class List extends React.Component {
  subscribe = null

  componentWillMount() {
    if (this.props.subscribeToMore)
      this.subscribe = this.props.subscribeToMore()
  }

  componentWillUnmount() {
    if (this.subscribe) {
      this.subscribe()
    }
  }

  render() {
    const { logs, search, since, component } = this.props
    const lastRow = logs.length
    const currentLogs = (Array.isArray(logs[lastRow - 1]) === false
      ? logs
      : logs[lastRow - 1]
    )
      .slice(0)
      .reverse()

    return (
      <Table
        className={s.list}
        search={search}
        Container={Console}
        nav={<Nav selected={component} />}
        headerOptions={<Since {...since} />}>
        {currentLogs &&
          currentLogs.map((l, i) => <Item key={l.id || i} log={l} />)}
        {(!currentLogs || !currentLogs.length) && (
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
  component: PropTypes.string,
  since: PropTypes.object,
  subscribeToMore: PropTypes.func,
}

export default Data(List)
