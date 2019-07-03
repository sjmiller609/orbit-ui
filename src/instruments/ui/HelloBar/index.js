'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import s from './styles.scss'
import { Row, Link } from 'instruments'

class HelloBar extends React.Component {
  render() {
    const { msg, to } = this.props
    return (
      <Link to={to}>
        <Row className={classnames(s.notice, msg ? s.show : null)}>
          <div className={s.message}>{msg}</div>
        </Row>
      </Link>
    )
  }
}

HelloBar.propTypes = {
  msg: PropTypes.string,
  to: PropTypes.string,
}

export default HelloBar
