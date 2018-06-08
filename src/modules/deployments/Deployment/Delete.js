import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import {
  CardForm,
  Form,
  TextField,
  H5,
  P,
  Mini,
  ShowDate,
} from '../../../instruments'

import Update from '../Data/Update'

const Delete = ({ deployment }) => {
  return (
    <CardForm
      title="Deprovision Deployment"
      button={{
        onClick: () => console.log('delete'),
        text: 'Delete',
        save: true,
        style: 'red',
      }}
      className={s.card}>
      <P>
        Warning! This cannot be undone. Your webserver, scheduler, database, and
        deploys will all be deleted, and you will lose all connections configure
        in Airflow.
      </P>
    </CardForm>
  )
}

Delete.propTypes = {
  deployment: PropTypes.object,
}

export default Update(Delete)
