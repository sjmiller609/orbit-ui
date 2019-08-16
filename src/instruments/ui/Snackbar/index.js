'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import s from './styles.scss'
import { Row } from 'instruments'

class Snackbar extends React.Component {
  timeout = null
  clear = this.clear.bind(this)

  /* istanbul ignore next */
  componentWillReceiveProps({ msg }) {
    if (!this.props.msg && msg)
      this.timeout = setTimeout(() => this.clear(), 4000)
    else if (this.props.msg && msg !== this.props.msg) {
      // restart timeout
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => this.clear(), 4000)
    }
  }

  /* istanbul ignore next */
  clear() {
    this.props.setMsg(null)
    clearTimeout(this.timeout)
  }

  render() {
    const { msg } = this.props
    return (
      <Row
        className={classnames(s.snackbar, msg ? s.show : null)}
        onClick={this.clear}>
        <div className={s.message}>{msg}</div>
      </Row>
    )
  }
}

Snackbar.propTypes = {
  msg: PropTypes.string,
  setMsg: PropTypes.func,
}

export default Snackbar
