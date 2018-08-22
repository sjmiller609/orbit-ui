'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { H5 } from 'instruments'

const FormSection = ({ title, id = 'section', children, className }) => {
  return (
    <section id={id} className={classnames(s.section, className)}>
      {title && <H5 className={s.title}>{title}</H5>}
      {children}
    </section>
  )
}

FormSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
  id: PropTypes.string,
}

export default FormSection
