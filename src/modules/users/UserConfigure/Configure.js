import React from 'react'
import PropTypes from 'prop-types'
import Selector from './Selector'

import s from './styles.scss'
import { CardForm, Form, Select } from 'instruments'

import UpdateRole from '../Data/UpdateRole'

const Configure = ({ form, role, disabled }) => {
  const options = [
    {
      icon: 'airflow_astro',
      text: 'Admin',
      value: 'WORKSPACE_ADMIN',
      disabled: disabled,
    },
    {
      icon: 'satellite',
      text: 'Editor',
      value: 'WORKSPACE_EDITOR',
      disabled: disabled,
    },
    {
      icon: 'astro_helmet',
      text: 'Viewer',
      value: 'WORKSPACE_VIEWER',
      disabled: disabled,
    },
  ]
  const permissions = form.field('permissions')
  console.log(permissions.value)
  return (
    <CardForm
      title="Configure"
      button={{
        save: form.save,
        text: 'Update',
      }}>
      <Select
        {...permissions}
        label="Role"
        className={s.selectors}
        Component={Selector}
        options={options}
        required
        defaultValue={role.text}
        info={
          'You must be an Admin to edit these settings. You also cannot change your own permissions.'
        }
      />
    </CardForm>
  )
}

Configure.propTypes = {
  save: PropTypes.bool,
  form: PropTypes.object,
  user: PropTypes.object,
  set: PropTypes.func,
  role: PropTypes.object,
  button: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default UpdateRole(Form(Configure))
