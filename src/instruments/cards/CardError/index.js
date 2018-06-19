'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card, Row, H2, Link, P } from '../../../instruments'
import astronaut from './astronaut.svg'
import s from './styles.scss'

const CardError = ({ children, className }) => {
  return (
    <Card className={classnames(s.card, className)}>
      <Row className={s.content} wrap>
        <img src={astronaut} className={s.img} />
        <div className={s.message}>
          <H2>Dag gone it! Something went wrong</H2>
          <P>
            <Link onClick={() => window.location.reload()}>Refresh</Link> to try
            again. Or if the problem persists, please&nbsp;
            <Link to="https://www.astronomer.io/contact">contact support</Link>.
          </P>
          {Array.isArray(children) ? children.map(el => el) : children}
        </div>
      </Row>
    </Card>
  )
}

CardError.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
}

export default CardError
