'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import s from './styles.scss'

import { Page } from 'instruments'

// wrapper for external pages
const Site = ({ children, nav, metaTitle, className }) => {
  return (
    <Page className={classnames(s.module, className)} metaTitle={metaTitle}>
      {nav}
      <div className={s.content}>{children}</div>
    </Page>
  )
}

Site.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  nav: PropTypes.element,
  metaTitle: PropTypes.string,
  className: PropTypes.string,
}

export default Site
