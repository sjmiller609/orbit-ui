'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import s from './styles.scss'

// Full screen background for modals, dropdowns, etc
const Backdrop = ({ show, close, blur }) => {
  if (!show) return null
  return (
    <div
      className={classnames(
        s.backdrop,
        blur ? s.blur : null,
        close ? s.close : null
      )}>
      <div onClick={close} />
    </div>
  )
}

Backdrop.propTypes = {
  show: PropTypes.bool,
  blur: PropTypes.bool,
  close: PropTypes.func,
}

export default Backdrop
