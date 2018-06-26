'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Site, SiteHeader } from 'instruments'

// wrapper for all modules
const Module = ({ menu, metaTitle, ...props }) => {
  const title =
    metaTitle !== 'Astronomer' ? metaTitle + ' | Astronomer' : metaTitle

  return <Site {...props} nav={<SiteHeader menu={menu} />} metaTitle={title} />
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
