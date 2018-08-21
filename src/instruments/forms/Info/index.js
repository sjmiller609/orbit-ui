import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './styles.scss'

class Info extends React.Component {
  info = null
  getStyle = this.getStyle.bind(this)
  state = {
    show: false,
    left: null,
    width: null,
  }

  getStyle(ref) {
    if (this.info) return
    this.info = ref
    // let fully render
    setTimeout(() => {
      const rect = this.info.getBoundingClientRect()
      const frame = window.innerWidth
      const distance = frame - rect.right
      const edge = 8
      if (distance < edge) {
        const set = {}
        set.left = distance - edge
        if (rect.width > frame) {
          set.left = edge - rect.left
          set.width = frame - edge * 2
        }
        this.setState(set)
      }
    }, 0)
  }
  render() {
    const { children } = this.props
    if (!children) return null
    const { show, left, width } = this.state
    return (
      <div
        className={classnames(s.wrapper, show && s.show)}
        onMouseEnter={() => this.setState({ show: true })}
        onMouseLeave={() => this.setState({ show: false })}>
        <span className={s.info}>
          <b>i</b>

          {show && (
            <div className={s.msg} ref={this.getStyle} style={{ left, width }}>
              {children}
            </div>
          )}
        </span>
      </div>
    )
  }
}

Info.propTypes = {
  children: PropTypes.string,
}

export default Info
