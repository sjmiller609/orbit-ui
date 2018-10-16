'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Mini } from 'instruments'

const FormSubSection = ({ title, id = 'section', children, className }) => {
  return (
    <section id={id} className={classnames(s.section, className)}>
      {title && <Mini className={s.title}>{title}</Mini>}
      <div className={s.wrapper}>{children}</div>
    </section>
  )
}

FormSubSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
  id: PropTypes.string,
}

export default FormSubSection
