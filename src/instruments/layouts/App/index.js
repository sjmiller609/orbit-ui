'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import s from './styles.scss'

import { Loading, Page } from 'instruments'

// wrapper for all modules
const App = ({ children, nav, loading, metaTitle, className }) => {
  if (loading) return <Loading />
  return (
    <Page className={classnames(s.module, className)} metaTitle={metaTitle}>
      {nav}
      <div className={s.content}>
        {Array.isArray(children) ? children.map(el => el) : children}
      </div>
    </Page>
  )
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  nav: PropTypes.element,
  loading: PropTypes.bool,
  metaTitle: PropTypes.string,
  className: PropTypes.string,
}

export default App
