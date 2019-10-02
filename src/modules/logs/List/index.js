import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table, Console, LoadingDots, Mini } from 'instruments'

import Item from './Item'
import Filters from './Filters'
import Data from '../Data'

class List extends React.PureComponent {
  subscribe = null

  state = {
    logs: [],
  }

  componentWillMount() {
    if (this.props.subscribeToMore) {
      this.subscribe = this.props.subscribeToMore()
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps.logs !== this.props.logs) {
      this.updateList(this.props.logs[0])
    }
  }

  componentWillUnmount() {
    if (this.subscribe) {
      this.subscribe()
    }
  }

  updateList = log => {
    this.setState(prevState => ({
      logs: [
        <Item key={`${log.id}-${log.createdAt}`} log={log} />,
        ...prevState.logs,
      ],
    }))
  }

  render() {
    const { search, since, component } = this.props
    const { logs } = this.state

    return (
      <Table
        className={s.list}
        search={search}
        headerOptions={<Filters component={component} since={since} />}>
        <Console>
          {logs.map(l => l)}
          {!logs.length && (
            <Mini className={s.waiting}>
              Waiting for logs
              <LoadingDots />
            </Mini>
          )}
        </Console>
      </Table>
    )
  }
}

List.propTypes = {
  logs: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  search: PropTypes.object,
  component: PropTypes.object,
  since: PropTypes.object,
  subscribeToMore: PropTypes.func,
}

export default Data(List)
