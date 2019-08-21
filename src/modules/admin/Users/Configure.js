import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { getQueryProps } from '../../../helpers/apollo'

import Module from '../../app/Module'
import Delete from '../../users/UserConfigure/Delete'
import DeleteInvite from '../../users/UserConfigure/DeleteInvite'

class UserConfigure extends React.Component {
  static propTypes = {
    users: PropTypes.array,
    self: PropTypes.object,
    loading: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {
      role: this.getRole(props),
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.users != this.props.users) {
      this.updateRole(this.props)
    }
  }

  getUser = props => {
    const { users, invites, match } = props
    const key = decodeURIComponent(match.params.id)

    let user = users !== undefined ? users[0] : undefined
    if (user === undefined && invites != undefined)
      user = invites.filter(i => i.email === key)

    return user
  }

  updateRole = newProps => this.setState({ role: this.getRole(newProps) })

  getRole = props => {
    const user = this.getUser(props)
    if (this.isInvite(user)) {
      return user.role
    }
  }

  isInvite = user => user && user.__typename === 'Invite'

  mapInviteToUser = user => ({
    roleBindings: [
      {
        role: user.role,
      },
    ],
    emails: [{ address: user.email }],
  })

  render() {
    const { self, users, loading } = this.props
    if (loading) return null
    if (self === undefined || users === undefined) return null

    const menu = {
      nav: 'admin',
    }

    const user = this.getUser(this.props)
    const isSelf = self.user.id === user.id
    const pending = /pending/.test(location.href)

    return (
      <Module menu={menu}>
        <React.Fragment>
          {!pending ? (
            <Delete user={{ ...user }} isSelf={isSelf} canUpdateIam={true} />
          ) : (
            <DeleteInvite
              user={{ ...user }}
              isSelf={isSelf}
              canUpdateIam={true}
            />
          )}
        </React.Fragment>
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
  graphql(users, {
    props: getQueryProps('users'),
    options: props => ({
      variables: {
        email: decodeURIComponent(props.match.params.id),
      },
    }),
  }),
  graphql(invites, {
    props: getQueryProps('invites'),
  })
)(UserConfigure)
