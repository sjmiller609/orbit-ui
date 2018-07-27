'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Avatar, B, MenuList, Item, Dropdown } from 'instruments'
import s from './styles.scss'

const ProfileMenu = ({ name, className }) => {
  return (
    <Dropdown
      className={classnames(s.menu, className)}
      right
      selector={<Avatar className={s.profile} />}>
      <MenuList label={name}>
        {/* <Item to="/account">Account Settings</Item> */}
        <Item to="/logout">Logout</Item>
      </MenuList>
    </Dropdown>
  )
}

ProfileMenu.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  className: PropTypes.string,
}

export default ProfileMenu
