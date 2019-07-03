'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import s from './styles.scss'
import { Row } from 'instruments'

class HelloBar extends React.Component {
  render() {
    const { msg } = this.props
    return (
      <Row className={classnames(s.notice, msg ? s.show : null)}>
        <div className={s.message}>{msg}</div>
      </Row>
    )
  }
}

HelloBar.propTypes = {
  msg: PropTypes.string,
  setMsg: PropTypes.func,
}

export default HelloBar
