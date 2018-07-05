'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import teamsApi from 'modules/teams/Data/api'
import api from './api'

import { Create as Mutation, GetData } from 'instruments'

const Invite = Component => {
  const Invite = ({ getData, ...props }) => {
    const query = {
      name: teamsApi.Teams,
      type: 'teams',
      vars: {
        teamId: getData.teamId,
        withUsers: true,
      },
    }
    return (
      <Mutation
        gql={api.InviteUser}
        back
        success="Your invitation has been sent"
        track="New User Invited to Team"
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  teamId: getData.teamId,
                  ...vars,
                },
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }
  Invite.propTypes = {
    getData: PropTypes.object,
  }

  return GetData(Invite, { teamId: true })
}

export default Invite
