'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Row } from 'instruments'
import s from './styles.scss'

const SiteHeader = ({ className, children }) => {
  return (
    <Row className={classnames(s.header, className)} justify="space-between">
      <Row>{children}</Row>
    </Row>
  )
}

SiteHeader.propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export default SiteHeader
