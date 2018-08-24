import PropTypes from 'prop-types'
import React from 'react'

const A = ({ to, title, className, onClick, children, newTab }) => {
  const aProps = {
    title,
    onClick,
    className,
  }
  if (to) {
    aProps.href = to
    aProps.target = newTab === false ? null : '_blank'
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
  newTab: PropTypes.bool,
  to: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
}

export default A
