import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from 'instruments'

import { default as Mutate } from '../Data/Delete'

const Delete = ({ serviceAccount, deploymentId, onSubmit }) => {
  return (
    <CardDelete
      title="Delete Service Account"
      text="Warning! This cannot be undone. Any services configured to use this API key will no longer have access."
      confirm={{
        text: (
          <span>
            Are you sure you want to delete&nbsp;
            <B>{serviceAccount.label}</B>
            &nbsp;from this {deploymentId ? 'deployment' : 'workspace'}?
          </span>
        ),
      }}
      onSubmit={() => {
        onSubmit({
          id: serviceAccount.id,
        })
      }}
    />
  )
}

Delete.propTypes = {
  onSubmit: PropTypes.func,
  serviceAccount: PropTypes.object,
  deploymentId: PropTypes.string,
}

export default Mutate(Delete)
