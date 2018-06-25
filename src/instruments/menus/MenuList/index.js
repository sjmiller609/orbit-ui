'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'
import { TextButton } from 'instruments'

const MenuList = ({ button, children, className }) => {
  const b = button && (
    <TextButton to={button.to} style={button.style} className={s.button}>
      {button.text}
    </TextButton>
  )
  return (
    <ul className={classnames(s.list, className)}>
      {button && button.start && b}
      {Array.isArray(children) ? children.map(el => el) : children}
      {button && !button.start && b}
    </ul>
  )
}

MenuList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  className: PropTypes.string,
  horizontal: PropTypes.bool,
  button: PropTypes.object,
}

export default MenuList
