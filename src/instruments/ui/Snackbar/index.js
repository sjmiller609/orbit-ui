'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import s from './styles.scss'
import { Row } from '../../../instruments'

class Snackbar extends React.Component {
  timeout = null

  componentWillMount() {
    const { hide, active } = this.props
    if (active) this.timeout = setTimeout(() => hide(), 4000)
  }

  componentWillReceiveProps({ msg, hide, active }) {
    if (!this.props.active && active)
      this.timeout = setTimeout(() => hide(), 4000)
    else if (this.props.active && active && msg !== this.props.msg) {
      // restart timeout
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => hide(), 4000)
    }
  }

  render() {
    const { msg, active, hide } = this.props
    return (
      <Row
        className={classnames(s.snackbar, active ? s.show : null)}
        onClick={() => {
          clearTimeout(this.timeout)
          hide()
        }}>
        <div className={s.message}>{msg}</div>
      </Row>
    )
  }
}

Snackbar.propTypes = {
  msg: PropTypes.string,
  active: PropTypes.bool,
  hide: PropTypes.func,
}

Snackbar.defaultProps = {
  msg: null,
  active: false,
}

export default Snackbar
