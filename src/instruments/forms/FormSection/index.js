'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { H5, Mini } from 'instruments'

const FormSection = ({ title, text, id = 'section', children, className }) => {
  return (
    <section
      id={id}
      className={classnames(s.section, text && s.hasText, className)}>
      {title && <H5 className={s.title}>{title}</H5>}
      {text && <Mini className={s.text}>{text}</Mini>}
      {children}
    </section>
  )
}

FormSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
  id: PropTypes.string,
}

export default FormSection
