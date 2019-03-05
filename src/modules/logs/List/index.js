import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table, Console, LoadingDots, Mini, TextButton } from 'instruments'

import Item from './Item'
import Filters from './Filters'
import Data from '../Data'

class List extends React.Component {
  subscribe = null
  onWheel = this.onWheel.bind(this)
  onClick = this.onClick.bind(this)
  state = {
    paused: false,
  }

  componentWillMount() {
    if (this.props.subscribeToMore) {
      this.subscribe = this.props.subscribeToMore()
    }
  }

  componentWillUnmount() {
    if (this.subscribe) {
      this.subscribe()
    }
  }

  onWheel(e) {
    const scrollTop = e.currentTarget.scrollTop
    if (scrollTop > 0) {
      this.subscribe && this.subscribe()
      setTimeout(() => this.setState({ paused: true }), 1000)
    }
  }

  onClick() {
    this.props.since.set(5)
    this.setState({ paused: false })
  }

  render() {
    const { logs, search, since, component } = this.props
    const { paused } = this.state

    return (
      <Table
        onWheel={this.onWheel}
        className={s.list}
        search={search}
        Container={Console}
        headerOptions={<Filters component={component} since={since} />}>
        {paused && (
          <Mini onClick={this.onClick} className={s.paused}>
            <TextButton className={s.unpause} onClick={this.onClick}>
              Stream paused, click to resume
            </TextButton>
          </Mini>
        )}
        {logs && logs.map((l, i) => <Item key={l.id || i} log={l} />).reverse()}
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
  component: PropTypes.object,
  since: PropTypes.object,
  subscribeToMore: PropTypes.func,
}

export default Data(List)
