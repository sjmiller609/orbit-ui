'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card } from '../../../instruments'

import s from './styles.scss'

const CardError = ({ children, className }) => {
  return (
    <Card className={classnames(s.card, className)}>
      <div className={s.formContent}>
        <p>something went wrong</p>
        {Array.isArray(children) ? children.map(el => el) : children}
      </div>
    </Card>
  )
}

CardError.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
}

export default CardError
