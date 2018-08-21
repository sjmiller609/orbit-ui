'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Box, H5 } from 'instruments'

const Card = ({ children, footer, header, className, id }) => {
  const justify = !footer ? 'flex-start' : 'space-between'
  return (
    <Box id={id} className={classnames(s.card, className)} justify={justify}>
      {header && (
        <header>
          {typeof header === 'string' ? (
            <Box className={s.title}>
              <H5>{header}</H5>
            </Box>
          ) : (
            header
          )}
        </header>
      )}
      <main>{children}</main>
      {footer && <footer>{footer}</footer>}
    </Box>
  )
}

Card.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  footer: PropTypes.element,
  className: PropTypes.string,
  id: PropTypes.string,
}

export default Card
