import PropTypes from 'prop-types'
import React from 'react'

const A = ({ to, title, className, onClick, children, target }) => {
  const aProps = {
    title,
    onClick,
    className,
  }
  if (to) {
    aProps.href = to
    aProps.target = target !== false ? '_blank' : null
  }
  return <a {...aProps}>{children}</a>
}

A.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  to: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
}

export default A
