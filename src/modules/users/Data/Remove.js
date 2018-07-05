'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'
import teamsApi from 'modules/teams/Data/api'

import { Delete as Mutate, GetData } from 'instruments'

const Remove = Component => {
  const Remove = ({ getData, ...props }) => {
    const query = {
      name: teamsApi.Teams,
      type: 'teams',
      vars: {
        teamId: getData.teamId,
        withUsers: true,
      },
    }
    return (
      <Mutate
        gql={api.RemoveUser}
        redirect="/users"
        success="User removed from team."
        track="User Removed From Team"
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
                refetchQueries: [
                  {
                    query: query.name,
                    variables: query.vars,
                  },
                ],
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutate>
    )
  }
  Remove.propTypes = {
    getData: PropTypes.object,
  }

  return GetData(Remove, { teamId: true })
}

export default Remove
