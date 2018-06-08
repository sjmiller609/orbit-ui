import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete } from '../../../instruments'

import Update from '../Data/Update'

const Delete = ({ deployment }) => {
  return (
    <CardDelete
      title="Deprovision Deployment"
      text="Warning! This cannot be undone. Your webserver, scheduler, database, and
      deploys will all be deleted, and you will lose all connections configure
      in Airflow."
      confirmText="Are you sure you want to deprovision your Airflow instance?"
      confirmButton="Deprovision Deployment"
      onSubmit={() => console.log('delete')}
    />
  )
}

Delete.propTypes = {
  deployment: PropTypes.object,
}

export default Update(Delete)
