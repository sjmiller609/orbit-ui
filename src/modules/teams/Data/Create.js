'use strict'
import React from 'react'
import api from './api'

import { Create as Mutation } from 'instruments'

const Create = Component => {
  const Create = props => {
    const query = {
      name: api.Teams,
      type: 'teams',
    }
    return (
      <Mutation
        gql={api.CreateTeam}
        redirect={data => '/teams/' + data.id}
        success="New team created successfully."
        track="New Team Created"
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
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

  return Create
}

export default Create
