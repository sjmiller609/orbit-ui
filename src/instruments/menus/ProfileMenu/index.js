'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Box, Icon, B, MenuList, Item, Dropdown } from 'instruments'
import s from './styles.scss'

const ProfileMenu = ({ name, className }) => {
  return (
    <Dropdown
      className={classnames(s.menu, className)}
      right
      selector={
        <Box className={s.icon}>
          <Icon icon="astro_helmet" className={s.profile} />
        </Box>
      }>
      <MenuList>
        <B className={s.title}>{name}</B>
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
