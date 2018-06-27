'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Row, Logo } from 'instruments'
import s from './styles.scss'

const SiteHeader = ({ className, children }) => {
  return (
    <Row className={classnames(s.header, className)} justify="space-between">
      <Logo className={s.logo} />
      <Row> {Array.isArray(children) ? children.map(el => el) : children}</Row>
    </Row>
  )
}

SiteHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export default SiteHeader
