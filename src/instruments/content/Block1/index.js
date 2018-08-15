'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { Row, Box, H1, P } from 'instruments'

const Block1 = ({ left, right, title, text, children, className }) => {
  return (
    <Row className={classnames(s.content, className)} wrap>
      {left && <Box className={s.left}>{left}</Box>}
      <Box className={s.right} align="flex-start">
        {right || (
          <React.Fragment>
            {title && <H1>{title}</H1>}
            {text && <P>{text}</P>}
            {children}
          </React.Fragment>
        )}
      </Box>
    </Row>
  )
}

Block1.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element,
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
}

export default Block1
