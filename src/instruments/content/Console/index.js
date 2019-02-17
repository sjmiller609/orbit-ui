'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

class Console extends React.Component {
  componentDidMount() {
    this.elem.addEventListener('wheel', this.scrollHandler)
  }

  componentWillUnmount() {
    this.elem.removeEventListener('wheel', this.scrollHandler)
  }

  scrollHandler(e) {
    if (e.deltaY) {
      e.preventDefault()
      e.currentTarget.scrollTop -=
        parseFloat(
          getComputedStyle(e.currentTarget).getPropertyValue('font-size')
        ) *
        (e.deltaY < 0 ? -1 : 1) *
        2
    }
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
}

export default Console
