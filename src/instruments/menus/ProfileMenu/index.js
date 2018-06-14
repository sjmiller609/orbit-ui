'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Box, Icon, Dropdown } from '../../../instruments'
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
      menu items
    </Dropdown>
  )
}

ProfileMenu.propTypes = {
  className: PropTypes.string,
}

export default ProfileMenu
