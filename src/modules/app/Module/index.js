'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { App } from 'instruments'

import NoMatch from '../NoMatch'
import Nav from '../Nav'

// wrapper for all modules
const Module = ({ menu, metaTitle, nada, ...props }) => {
  if (nada) return <NoMatch />
  const title =
    metaTitle !== 'Astronomer' ? metaTitle + ' | Astronomer' : metaTitle

  return <App {...props} nav={<Nav menu={menu} />} metaTitle={title} />
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
