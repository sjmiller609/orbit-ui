'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card, Block1, Link, P } from 'instruments'
import astronaut from './astronaut.svg'
import s from './styles.scss'

const CardError = ({ children, retry, className }) => {
  const onClick = retry || (() => window.location.reload())
  return (
    <Card className={classnames(s.card, className)}>
      <Block1
        left={<img src={astronaut} className={s.img} />}
        title="DAG gone it! Something went wrong">
        <P>
          <Link onClick={onClick}>Refresh</Link> to try again. Or if the problem
          persists, please&nbsp;
          <Link to="https://www.astronomer.io/contact">contact support</Link>.
        </P>
        {children}
      </Block1>
    </Card>
  )
}

CardError.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
  retry: PropTypes.func,
}

export default CardError
