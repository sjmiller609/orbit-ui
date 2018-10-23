import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TableField, TextField } from 'instruments'

import Item from './Item'

const Emails = ({ form }) => {
  const field = form.field('properties.alert_emails')
  return (
    <CardForm
      title="Emails to Receive Alerts"
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
        fieldProps={{
          label: 'Add Email',
          type: 'email',
          placeholder: 'person@yourcompany.com',
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

export default Form(Emails)
