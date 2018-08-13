'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import classnames from 'classnames'
import { Site } from 'instruments'
import Nav from '../Nav'

const Module = ({ metaTitle, className, ...props }) => {
  const title =
    metaTitle !== 'Astronomer' ? metaTitle + ' | Astronomer' : metaTitle

  return (
    <Site
      {...props}
      nav={<Nav />}
      metaTitle={title}
      className={classnames(s.module, className)}
    />
  )
}

Module.propTypes = {
  metaTitle: PropTypes.string,
  className: PropTypes.string,
}

Module.defaultProps = {
  metaTitle: 'Astronomer',
}

export default Module
