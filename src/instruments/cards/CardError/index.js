'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Card, Block1, Link, P, LoadImg } from 'instruments'
import s from './styles.scss'

const Astronaut = LoadImg(() => import(`./astronaut.svg`))

const CardError = ({ children, retry, className }) => {
  const onClick =
    retry ||
    (window.location.pathname === '/error'
      ? () => window.history.back()
      : () => window.location.reload())
  return (
    <Card className={classnames(s.card, className)}>
      <Block1
        left={<Astronaut className={s.img} />}
        title="DAG gone it! Something went wrong">
        {children}
        <P>
          <Link onClick={onClick}>Refresh</Link> to try again. Or if the problem
          persists, please&nbsp;
          <Link to="https://www.astronomer.io/contact">contact support</Link>.
        </P>
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
