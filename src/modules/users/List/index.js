import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { Table } from 'instruments'

import Data from 'modules/workspaces/Data'
import Item from './Item'
import Empty from './Empty'

class List extends React.Component {
  state = { search: '' }
  // search obj constants
  search = {
    delay: false,
    placeholder: 'Search Users',
    call: search => this.setState({ search }),
    fields: ['users'],
  }
  button = {
    text: 'Invite',
    to: '/users/new',
  }

  render() {
    const { workspaces } = this.props
    const { search } = this.state

    const users = (workspaces && workspaces[0] && workspaces[0].users) || []

    return (
      <Table
        className={s.list}
        search={{
          text: search,
          ...this.search,
        }}
        button={this.button}
        Empty={Empty}>
        {users.map(t => <Item key={t.id} user={t} />)}
      </Table>
    )
  }
}

List.propTypes = {
  workspaces: PropTypes.array,
  search: PropTypes.object,
}

export default Data(List)
