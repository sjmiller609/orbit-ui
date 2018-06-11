import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, B } from '../../../instruments'

import Update from '../Data/Update'

const Delete = ({ deployment }) => {
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
            <B>{deployment.title}</B>
            ?
          </span>
        ),
      }}
      onSubmit={() => console.log('delete' + deployment.id)}
    />
  )
}

Delete.propTypes = {
  deployment: PropTypes.object,
}

export default Update(Delete)
