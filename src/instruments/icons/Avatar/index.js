'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Icon, Box } from 'instruments'
import s from './styles.scss'

// TODO: add custom pic
const Avatar = ({ className }) => {
  return (
    <Box className={classnames(s.avatar, className)}>
      <Icon icon="astro_helmet" className={s.astro} />
    </Box>
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
}

export default Avatar
