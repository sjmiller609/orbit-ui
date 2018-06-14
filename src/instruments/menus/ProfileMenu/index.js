'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Box, Icon, Link } from '../../../instruments'
import s from './styles.scss'

const ProfileMenu = ({ className }) => {
  return (
    <Box className={classnames(s.menu, className)}>
      <Icon icon="astro_helmet" className={s.profile} />
    </Box>
  )
}

ProfileMenu.propTypes = {
  className: PropTypes.string,
}

export default ProfileMenu
