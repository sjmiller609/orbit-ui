'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import classnames from 'classnames'

import s from './styles.scss'

import { Loading } from '../../../instruments'

// wrapper for all modules
const Page = ({ children, nav, loading, metaTitle, className }) => {
  if (loading) return <Loading />
  return (
    <div className={classnames(s.module, className)}>
      {nav}
      <div className={s.content}>
        {Array.isArray(children) ? children.map(el => el) : children}
      </div>

      <Helmet>
        <title>{metaTitle}</title>
      </Helmet>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  nav: PropTypes.element,
  loading: PropTypes.bool,
  metaTitle: PropTypes.string,
  className: PropTypes.string,
}

Page.defaultProps = {
  metaTitle: 'Astronomer',
  // breadcrumbs: [],
  menu: {},
  // help: {},
}

export default Page
