'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

/* istanbul ignore next */
class Console extends React.Component {
  state = {
    pause: false,
  }

  scrollToBottom = () => {
    if (!this.state.pause) {
      this.container.scrollTop = this.content.scrollHeight
    }
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  onWheel = e => {
    const pause =
      this.container.scrollTop !==
      this.container.scrollHeight - this.container.clientHeight

    this.setState({ pause })
    return e
  }

  render() {
    const { children, className } = this.props

    return (
      <div
        className={classnames(s.container, className)}
        ref={el => {
          this.container = el
        }}
        onWheel={e => this.onWheel(e)}>
        <div
          className={s.content}
          ref={el => {
            this.content = el
          }}>
          {children}
        </div>
      </div>
    )
  }
}

Console.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
}

export default Console
