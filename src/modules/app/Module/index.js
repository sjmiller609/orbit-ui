'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Page } from '../../../instruments'

import subMenus from './subMenus'
import NoMatch from '../NoMatch'

// wrapper for all modules
const Module = ({ menu, metaTitle, nada, ...props }) => {
  if (nada) return <NoMatch />
  const title =
    metaTitle !== 'Astronomer' ? metaTitle + ' | Astronomer' : metaTitle

  const subMenu = menu.subMenu || subMenus[menu.nav]

  return <Page {...props} menu={menu} subMenu={subMenu} metaTitle={title} />
}

Module.propTypes = {
  menu: PropTypes.object,
  metaTitle: PropTypes.string,
  nada: PropTypes.bool, // 404
}

Module.defaultProps = {
  metaTitle: 'Astronomer',
  // breadcrumbs: [],
  menu: {},
  // help: {},
}

export default Module
