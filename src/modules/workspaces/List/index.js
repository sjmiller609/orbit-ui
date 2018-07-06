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
    placeholder: 'Search Workspaces',
    call: search => this.setState({ search }),
  }
  button = {
    text: 'New Workspace',
    to: '/workspaces/new',
  }

  render() {
    const { workspaces } = this.props
    const { search } = this.state

    return (
      <Table
        className={s.list}
        search={{
          text: search,
          ...this.search,
        }}
        button={this.button}
        Empty={Empty}>
        {workspaces && workspaces.map(t => <Item key={t.id} workspace={t} />)}
      </Table>
    )
  }
}

List.propTypes = {
  workspaces: PropTypes.array,
  search: PropTypes.object,
}

export default Data(List)
