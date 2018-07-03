import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from 'instruments'

import { default as Mutate } from '../Data/Delete'

const Delete = ({ user, onSubmit }) => {
  return (
    <CardDelete
      title="Deprovision Deployment"
      text="Warning! This cannot be undone. Your webserver, scheduler, database, and
      deploys will all be deleted, and you will lose all connections configured
      in Airflow."
      confirm={{
        text: (
          <span>
            Are you sure you want to deprovision deployment&nbsp;
            <B>{user.label}</B>
            ?
          </span>
        ),
      }}
      onSubmit={() => {
        onSubmit({
          id: user.id,
          queryVars: {
            teamId: user.team.id,
          },
        })
      }}
    />
  )
}

Delete.propTypes = {
  onSubmit: PropTypes.func,
  user: PropTypes.object,
}

export default Mutate(Delete)
