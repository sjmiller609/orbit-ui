'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import classnames from 'classnames'

import s from './styles.scss'

const Page = ({ children, metaTitle, className }) => {
  return (
    <div className={classnames(s.page, className)}>
      {children}

      <Helmet>
        <title>{metaTitle}</title>
      </Helmet>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  metaTitle: PropTypes.string,
  className: PropTypes.string,
}

Page.defaultProps = {
  metaTitle: 'Astronomer',
}

export default Page
