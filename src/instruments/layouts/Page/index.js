'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import classnames from 'classnames'

import s from './styles.scss'

import { Loading, Header } from '../../../instruments'

// wrapper for all modules
const Page = ({ children, menu, subMenu, loading, metaTitle, className }) => {
  if (loading) return <Loading />
  return (
    <div className={classnames(s.module, className)}>
      <Header
        className={s.header}
        subMenu={subMenu}
        level1={{
          text: 'My Team', // TODO: get current team data
          to: menu.home || '/deployments',
        }}
        level2={menu.level2}
      />
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
  menu: PropTypes.object,
  subMenu: PropTypes.array,
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
