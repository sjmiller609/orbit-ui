'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

/* istanbul ignore next */
class Console extends React.Component {
  render() {
    const { children, className } = this.props

    return (
      <div className={classnames(s.container, className)}>
        <div className={s.content}>{children}</div>
      </div>
    )
  }
}

Console.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
}

export default Console
