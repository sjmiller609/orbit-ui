'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

class Console extends React.Component {
  componentDidMount() {
    this.elem.addEventListener('wheel', this.scrollHandler.bind(this))
  }

  componentWillUnmount() {
    this.elem.removeEventListener('wheel', this.scrollHandler.bind(this))
  }

  scrollHandler(e) {
    this.props.onWheel && this.props.onWheel(e)
  }

  render() {
    const { children, className } = this.props

    return (
      <div
        ref={elem => (this.elem = elem)}
        className={classnames(s.content, className)}>
        {children}
      </div>
    )
  }
}

Console.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
  onWheel: PropTypes.func,
}

export default Console
