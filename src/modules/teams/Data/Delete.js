'use strict'
import React from 'react'
import api from './api'

import { Delete as Mutate } from 'instruments'

const Delete = Component => {
  const Delete = props => {
    const query = {
      name: api.Teams,
      type: 'teams',
    }
    return (
      <Mutate
        gql={api.DeleteTeam}
        redirect="/teams"
        success="Team deleted successfully."
        track="Team Deleted"
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: vars,
                refetchQueries: [{ query: query.name }],
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutate>
    )
  }

  return Delete
}

export default Delete
