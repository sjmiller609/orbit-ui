'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Page, Box, CardError, Logo } from 'instruments'
import classnames from 'classnames'

import s from './styles.scss'

const ErrorPage = ({ children, retry, className }) => {
  return (
    <Page
      className={classnames(s.page, className)}
      metaTitle="Error | Astronomer">
      <Box full className={s.noMatch}>
        <CardError retry={retry}>{children}</CardError>
        <Logo className={s.logo} noStars />
      </Box>
    </Page>
  )
}

ErrorPage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  className: PropTypes.string,
  retry: PropTypes.func,
}

export default ErrorPage
