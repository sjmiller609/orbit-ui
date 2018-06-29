'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'

import { Site } from 'instruments'
import Nav from '../Nav'
// wrapper for all modules
const Module = ({ metaTitle, ...props }) => {
  const title =
    metaTitle !== 'Astronomer' ? metaTitle + ' | Astronomer' : metaTitle

  return (
    <Site {...props} nav={<Nav />} metaTitle={title} className={s.module} />
  )
}

Module.propTypes = {
  menu: PropTypes.object,
  metaTitle: PropTypes.string,
  nada: PropTypes.bool, // 404
}

Module.defaultProps = {
  metaTitle: 'Astronomer',
  menu: {},
  // help: {},
}

export default Module
