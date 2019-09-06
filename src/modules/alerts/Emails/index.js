import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, TableField, TextField } from 'instruments'
import Update from '../Data/Update'
import Item from './Item'
import info from '../info'

class Emails extends React.Component {
  render() {
    const { form, emails } = this.props
    const field = form.field('properties.alert_emails')

    return (
      <CardForm
        title="Configure Alerts"
        button={{
          save: form.save,
          text: 'Save',
        }}
        disable={false}
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
            focus: true,
          }}
          getRowProps={value => ({ email: value })}
        />
      </CardForm>
    )
  }
}

Emails.propTypes = {
  workspaceId: PropTypes.string,
  emails: PropTypes.array,
  form: PropTypes.object,
}

export default Update(Form(Emails))
