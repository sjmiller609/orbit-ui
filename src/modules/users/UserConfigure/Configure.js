import React from 'react'
import PropTypes from 'prop-types'
import Selector from './Selector'

import s from './styles.scss'
import {
  CardForm,
  Form,
  H5,
  Dropdown,
  MenuList,
  Item,
  TextFieldSelect,
  FormSection,
  FieldSet,
  TextField,
  Select,
} from 'instruments'

import UpdateRole from '../Data/UpdateRole'

const Configure = ({ form, button, user, role}) => {
  // console.log({ form })
  const options = [
    {
      icon: 'airflow_astro',
      text: 'Admin',
      value: 'WORKSPACE_ADMIN',
    },
    {
      icon: 'alien_ship',
      text: 'Editor',
      value: 'WORKSPACE_EDITOR',
    },
    {
      icon: 'astro_helmet',
      text: 'Viewer',
      value: 'WORKSPACE_VIEWER',
    },
  ]

  return (
    <CardForm
      title="Configure"
      button={{
        save: form.save,
        text: 'Update',
        onClick: role.set(role.text),
      }}
      className={s.card}>
      {/* <H5 className={s.name}>
        Permissions for {user.username || user.email}. Coming soon.
      </H5> */}
      <Select
        {...form.field('role')}
        label="Role"
        className={s.selectors}
        Component={Selector}
        options={options}
        required
        defaultValue="e"
      />
      {/* <Dropdown
        className={s.component}
        selector={<div className={s.button}>{role.text}</div>}
        {...form.field(role.text)}>
        <MenuList label="Workspace Role">
          <Item onClick={() => role.set('WORKSPACE_ADMIN')}>
            Workspace Admin
          </Item>
          <Item onClick={() => role.set('WORKSPACE_EDITOR')}>
            Workspace Editor
          </Item>
          <Item onClick={() => role.set('WORKSPACE_VIEWER')}>
            Workspace Viewer
          </Item>
        </MenuList>
      </Dropdown> */}
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
  workspaceId: PropTypes.string,
  set: PropTypes.func,
  role: PropTypes.object,
  button: PropTypes.bool,
}

export default UpdateRole(Form(Configure))
