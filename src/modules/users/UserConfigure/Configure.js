import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TextField, H5, P, Mini, ShowDate } from 'instruments'

import Update from '../Data/Update'

const Configure = ({ form, user }) => {
  return (
    <CardForm
      title="Configure"
      button={{
        save: form.save,
        text: 'Update',
      }}
      className={s.card}>
      <H5 className={s.name}>Permissions for {user.username}. Coming soon.</H5>
      {/* <div className={s.deployed}>
        <P>Deployed</P>
        <Mini>
          <ShowDate date={user.createdAt} />
        </Mini>
      </div> */}
    </CardForm>
  )
}

Configure.propTypes = {
  save: PropTypes.bool,
  form: PropTypes.object,
  user: PropTypes.object,
}

export default Update(Form(Configure))
