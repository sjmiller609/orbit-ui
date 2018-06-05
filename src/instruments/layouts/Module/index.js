'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import classnames from 'classnames'

import s from './styles.scss'

import { Loading, Header } from '../../../instruments'

// wrapper for all modules
const Module = ({ children, loading, metaTitle, className }) => {
  if (loading) return <Loading />
  return (
    <div className={classnames(s.module, className)}>
      <Header className={s.header} />
      <div className={s.content}>
        {Array.isArray(children) ? children.map(el => el) : children}
      </div>

      <Helmet>
        <title>
          {metaTitle !== 'Astronomer' ? metaTitle + ' | Astronomer' : metaTitle}
        </title>
      </Helmet>
    </div>
  )
}

Module.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  // helper: PropTypes.oneOfType([
  //   PropTypes.array,
  //   PropTypes.element,
  //   PropTypes.string,
  // ]),
  // header: PropTypes.oneOfType([
  //   PropTypes.array,
  //   PropTypes.element,
  //   PropTypes.string,
  // ]),
  // help: PropTypes.object,
  // breadcrumbs: PropTypes.array,
  menu: PropTypes.array,
  loading: PropTypes.bool,
  metaTitle: PropTypes.string,
  className: PropTypes.string,
}

Module.defaultProps = {
  metaTitle: 'Astronomer',
  // breadcrumbs: [],
  // menu: [],
  // help: {},
}

export default Module
