import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table } from 'instruments'

import Data from '../Data'
import Item from './Item'
import Empty from './Empty'

class List extends React.Component {
  state = { search: '' }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Deployments',
    call: search => this.setState({ search }),
  }
  button = {
    text: 'New Deployment',
    to: '/deployments/new',
  }

  render() {
    const { deployments } = this.props
    const { search } = this.state

    return (
      <Table
        className={s.list}
        search={search}
        button={this.button}
        Empty={Empty}>
        {deployments &&
          deployments.map(d => <Item key={d.id} deployment={d} />)}
      </Table>
    )
  }
}

List.propTypes = {
  deployments: PropTypes.array,
  search: PropTypes.object,
}

export default Data(List)
