import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from 'instruments'

import { default as Mutate } from '../Data/Delete'

const Delete = ({ deployment, onSubmit }) => {
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
            <B>{deployment.label}</B>
            ?
          </span>
        ),
      }}
      onSubmit={() => {
        onSubmit({
          id: deployment.id,
          queryVars: {
            workspaceId: deployment.workspace.id,
          },
        })
      }}
    />
  )
}

Delete.propTypes = {
  onSubmit: PropTypes.func,
  deployment: PropTypes.object,
}

export default Mutate(Delete)
