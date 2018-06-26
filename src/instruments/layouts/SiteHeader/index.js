'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Row, Logo } from 'instruments'
import s from './styles.scss'

const SiteHeader = ({ className }) => {
  return (
    <Row className={classnames(s.header, className)} justify="flex-start">
      <Logo darkBg className={s.logo} />
    </Row>
  )
}

SiteHeader.propTypes = {
  className: PropTypes.string,
}

export default SiteHeader
