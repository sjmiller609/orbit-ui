'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import s from './styles.scss'
import { Row, Button } from 'instruments'

class HelloBar extends React.Component {
  render() {
    const { msg, to, button } = this.props
    return (
      <Row className={classnames(s.notice, msg ? s.show : null)}>
        <Row className={s.message}>
          {msg}
          {button &&
            msg && (
              <Button className={s.button} to={to}>
                {button}
              </Button>
            )}
        </Row>
      </Row>
    )
  }
}

HelloBar.propTypes = {
  msg: PropTypes.string,
  to: PropTypes.string,
  button: PropTypes.string,
}

export default HelloBar
