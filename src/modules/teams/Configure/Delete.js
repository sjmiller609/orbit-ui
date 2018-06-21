import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from '../../../instruments'

import { default as Mutate } from '../Data/Delete'

const Delete = ({ team, onSubmit }) => {
  return (
    <CardDelete
      title="Delete Team"
      text="Warning! This cannot be undone. Your deployments will all be deleted, and you will lose all connections configured in Airflow."
      confirm={{
        text: (
          <span>
            Are you sure you want to delete&nbsp;
            <B>{team.label}</B>
            ?
          </span>
        ),
      }}
      onSubmit={() => {
        onSubmit({ id: team.id })
      }}
    />
  )
}

Delete.propTypes = {
  onSubmit: PropTypes.func,
  team: PropTypes.object,
}

export default Mutate(Delete)
