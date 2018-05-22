'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

const Card = ({ children, footer, header, className }) => {
  return (
    <div className={classnames(s.card, className)}>
      {header && <header>{header}</header>}
      <main>{children}</main>
      {footer && <footer>{footer}</footer>}
    </div>
  )
}

Card.propTypes = {
  header: PropTypes.element,
  children: PropTypes.element.isRequired,
  footer: PropTypes.element,
  className: PropTypes.string,
}

export default Card
