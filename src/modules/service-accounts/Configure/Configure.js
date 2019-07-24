import React from 'react'
import PropTypes from 'prop-types'
import Selector from './Selector'

import { CardForm, Form, TextField, Select } from 'instruments'

import s from './styles.scss'
import info from '../info'

class Configure extends React.Component {
  render() {
    const { form, title, saveText, deploymentId, role } = this.props

    const options = [
      {
        icon: 'astro_helmet',
        text: 'Viewer',
        value: 'WORKSPACE_VIEWER',
      },
      {
        icon: 'satellite',
        text: 'Editor',
        value: 'WORKSPACE_EDITOR',
      },
      {
        icon: 'airflow_astro',
        text: 'Admin',
        value: 'WORKSPACE_ADMIN',
      },
    ]

    return (
      <CardForm
        title={title || 'Configure'}
        id="configure"
        button={{
          save: form.save,
          text: saveText || 'Save',
        }}>
        <TextField
          placeholder="Name"
          label="Name"
          required
          focus
          info={info.name[deploymentId ? 'deployment' : 'workspace']}
          {...form.field('label')}
        />
        <TextField
          placeholder="Category"
          label="Category"
          info={info.category}
          {...form.field('category')}
        />
        <Select
          {...form.field('role')}
          className={s.selectors}
          Component={Selector}
          options={options}
          required
          defaultValue={role}
          info={info.role}
        />
      </CardForm>
    )
  }
}

Configure.propTypes = {
  form: PropTypes.object,
  title: PropTypes.string,
  saveText: PropTypes.string,
  deploymentId: PropTypes.string,
  role: PropTypes.string,
}

export default Form(Configure)
