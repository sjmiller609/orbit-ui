import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TableField, TextField } from 'instruments'
import Update from '../Data/Update'
import Item from './Item'
import info from '../info'

const Emails = ({ form, emails }) => {
  const field = form.field('properties.alert_emails')

  return (
    <CardForm
      title="Configure Alerts"
      button={{
        save: form.save,
        text: 'Save',
      }}
      className={s.alerts}>
      <TableField
        {...field}
        title="Email"
        formField={form.field}
        FieldType={TextField}
        Row={Item}
        data={emails}
        fieldProps={{
          label: 'Add Email',
          type: 'email',
          placeholder: 'name@yourcompany.com',
          info: info.alert_emails,
        }}
        getRowProps={value => ({ email: value })}
      />
    </CardForm>
  )
}

Emails.propTypes = {
  emails: PropTypes.array,
  form: PropTypes.object,
}

export default Update(Form(Emails))
