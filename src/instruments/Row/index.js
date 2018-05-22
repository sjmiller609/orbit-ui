import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'
import s from './s.module.css'

const Row = ({ children, className, passRef, justify, align, wrap, auto }) => {
  return (
    <div
      ref={passRef}
      className={classnames(
        s.row,
        s[justify],
        align ? s['align-' + align] : null,
        wrap ? s.wrap : null,
        auto ? s.auto : null,
        className
      )}>
      {Array.isArray(children) ? children.map(el => el) : children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  passRef: PropTypes.func,
  justify: PropTypes.string,
  align: PropTypes.string,
  wrap: PropTypes.bool,
  auto: PropTypes.bool,
}

export default Row
