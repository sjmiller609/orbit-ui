'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Info } from 'instruments'

const FormLabel = ({ children, info, id, className }) => {
  return (
    <label htmlFor={id} className={classnames(s.label, className)}>
      {children}
      <Info>{info}</Info>
    </label>
  )
}

FormLabel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  className: PropTypes.string,
  info: PropTypes.string,
}

export default FormLabel
