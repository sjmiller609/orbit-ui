import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { compose, graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

import Module from '../../app/Module'
import { Table } from 'instruments'
import Item from '../../users/List/Item'

class Users extends Component {
  static propTypes = {
    getUsers: PropTypes.object,
    getInvites: PropTypes.object,
    loading: PropTypes.bool,
  }

  constructor(props) {
    super(props)

    this.state = {
      users: props.getUsers.users,
      invites: props.getInvites.invites,
      search: '',
      menu: {
        nav: 'admin',
      },
    }
  }

  componentDidMount = async () => {
    try {
      await this.props.getUsers.refetch()
      await this.props.getInvites.refetch()
    } catch (err) {
      console.log(err) // eslint-disable-line
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      this.setData(this.props)
    }
  }

  setData = props =>
    this.setState({
      users: props.getUsers.users,
      invites: props.getInvites.invites,
    })

  search = {
    delay: false,
    placeholder: 'Search Users',
    call: search => this.handleSearch(search),
    fields: ['users'],
  }

  handleSearch = async search => {
    this.setState({ search })
    try {
      await this.props.getUsers.refetch({ username: search, email: search })
      await this.props.getInvites.refetch({ email: search })
      this.setState({ search })
    } catch (err) {
      console.log(err) // eslint-disable-line
    }
  }

  render() {
    const { search, menu } = this.state
    const { users } = this.props.getUsers
    const { invites } = this.props.getInvites

    const button = {
      text: 'Invite',
      to: '/admin/users/new',
    }

    return (
      <Module metaTitle="Users" menu={menu}>
        <Table
          search={{
            text: search,
            ...this.search,
          }}
          button={button}>
          {users != undefined &&
            users.map(t => (
              <Item
                key={t.id}
                user={t}
                role={null}
                to={`/admin/users/${encodeURIComponent(t.username)}/configure`}
                admin={true}
              />
            ))}
          {invites != undefined &&
            invites.map(t => (
              <Item
                key={t.id}
                user={t}
                pending
                role={t.role}
                to={`/admin/pending/${encodeURIComponent(t.email)}/configure`}
                admin={true}
              />
            ))}
        </Table>
      </Module>
    )
  }
}

const users = gql`
  query users($userId: Uuid, $username: String, $email: String) {
    users(userUuid: $userId, username: $username, email: $email) {
      id: uuid
      emails {
        address
        verified
        primary
      }
      fullName
      username
      status
      createdAt
      updatedAt
      roleBindings {
        role
        workspace {
          id
        }
      }
    }
  }
`

const invites = gql`
  query invites($email: String) {
    invites(email: $email) {
      id: uuid
      email
      role
      createdAt
      updatedAt
    }
  }
`

export default compose(
  withRouter,
  withApollo,
  graphql(users, { name: 'getUsers' }),
  graphql(invites, { name: 'getInvites' })
)(Users)
