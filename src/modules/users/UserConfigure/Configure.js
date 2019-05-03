import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.scss'
import { CardForm, Form, H5, Dropdown, MenuList, Item } from 'instruments'

import UpdateRole from '../Data/UpdateRole'

const Configure = ({ form, user }) => {
  return (
    <CardForm
      title="Configure"
      button={{
        save: form.save,
        text: 'Update',
      }}
      className={s.card}>
      {/* <H5 className={s.name}>
        Permissions for {user.username || user.email}. Coming soon.
      </H5> */}
      <Dropdown
        className={s.component}
        selector={<div className={s.button}>{user.roleBindings[0].role}</div>}>
        <MenuList label="Workspace Role">
          <Item>Workspace Admin</Item>
          <Item>Workspace User</Item>
          <Item>Workspace Viewer</Item>
        </MenuList>
      </Dropdown>
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

export default UpdateRole(Form(Configure))
