import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TableField, TextField } from 'instruments'

import Item from './Item'
import Empty from './Empty'

const Emails = ({ form }) => {
  const field = form.field('properties.alert_emails')
  return (
    <CardForm
      title="Emails to Send Alerts"
      button={{
        save: form.save,
        text: 'Add Email',
      }}
      className={s.alerts}>
      <TableField
        {...field}
        title="Email"
        formField={form.field}
        FieldType={TextField}
        Row={Item}
        Empty={Empty}
        fieldProps={{
          label: 'Email',
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
