import React from 'react'
import PropTypes from 'prop-types'

import { Row } from 'instruments'
import Module from '../Module'
import AuthServices from '../AuthServices'

import s from './styles.scss'

const Layout = ({ title, children }) => {
  return (
    <Module metaTitle={title}>
      <Row justify="space-around" className={s.wrapper} wrap>
        <div className={s.content}>
          {Array.isArray(children) ? children.map(el => el) : children}
        </div>
        <AuthServices login={title === 'Login'} />
      </Row>
    </Module>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
}

export default Layout
