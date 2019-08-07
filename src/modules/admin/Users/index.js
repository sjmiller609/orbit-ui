import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { compose, graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { getQueryProps } from '../../../helpers/apollo'

import Module from '../../app/Module'
import { Table } from 'instruments'
import Item from '../../users/List/Item'

class Users extends Component {
  static propTypes = {
    users: PropTypes.array,
    invites: PropTypes.array,
    loading: PropTypes.bool,
  }

  constructor(props) {
    super(props)

    this.state = {
      users: props.users,
      invites: props.invites,
      search: {
        delay: false,
        placeholder: 'Search Users',
        call: search => this.setState({ search }),
        fields: ['users'],
      },
      menu: {
        nav: 'admin',
      },
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      this.setData(this.props)
    }
  }

  setData = props =>
    this.setState({
      users: props.users,
      invites: props.invites,
    })

  render() {
    const { users, invites, search, menu } = this.state

    const button = {
      text: 'Invite',
      to: '/admin/users/new',
    }

    return (
      <Module metaTitle="Users" menu={menu}>
        <Table search={search} button={button}>
          {users != undefined &&
            users.map(t => (
              <Item
                key={t.id}
                user={t}
                role={null}
                to={`/admin/users/${encodeURIComponent(t.username)}`}
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
  query invites {
    invites {
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
  graphql(users, {
    props: getQueryProps('users'),
  }),
  graphql(invites, {
    props: getQueryProps('invites'),
  })
)(Users)
