'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Box } from '../../instruments'

const Card = ({ children, footer, header, className }) => {
  return (
    <Box className={classnames(s.card, className)} justify="space-between">
      {header && <header>{header}</header>}
      <main>{children}</main>
      {footer && <footer>{footer}</footer>}
    </Box>
  )
}

Card.propTypes = {
  header: PropTypes.element,
  children: PropTypes.element.isRequired,
  footer: PropTypes.element,
  className: PropTypes.string,
}

export default Card
