'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Box, Icon, H3, Item, Dropdown } from '../../../instruments'
import s from './styles.scss'

const ProfileMenu = ({ className }) => {
  return (
    <Dropdown
      className={classnames(s.menu, className)}
      right
      selector={
        <Box className={s.icon}>
          <Icon icon="astro_helmet" className={s.profile} />
        </Box>
      }>
      <ul className={s.content}>
        <H3>[MyName]</H3>
        <Item to="/account" vertical>
          Account Settings
        </Item>
        <Item to="/logout" vertical>
          Logout
        </Item>
      </ul>
    </Dropdown>
  )
}

ProfileMenu.propTypes = {
  className: PropTypes.string,
}

export default ProfileMenu
