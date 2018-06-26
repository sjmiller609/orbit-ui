'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Page, Box, CardError, Logo } from 'instruments'
import classnames from 'classnames'

import s from './styles.scss'

const ErrorPage = ({ retry, className }) => {
  return (
    <Page
      className={classnames(s.page, className)}
      metaTitle="Error | Astronomer">
      <Box full className={s.noMatch}>
        <CardError retry={retry} />
        <Logo className={s.logo} noStars />
      </Box>
    </Page>
  )
}

ErrorPage.propTypes = {
  className: PropTypes.string,
  retry: PropTypes.func,
}

export default ErrorPage
