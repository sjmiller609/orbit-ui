'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Icon, Box } from 'instruments'
import s from './styles.scss'

const Avatar = ({ url, title, className }) => {
  return (
    <Box className={classnames(s.avatar, url && s.pic, className)}>
      {url ? (
        <img src={url} title={title} />
      ) : (
        <Icon icon="astro_helmet" title={title} />
      )}
    </Box>
  )
}

Avatar.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
}

export default Avatar
