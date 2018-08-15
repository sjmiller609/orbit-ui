'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { Loading, ErrorPage } from 'instruments'

const Handler = ({ error, timedOut, pastDelay, retry }) => {
  if (error) {
    console.log(error)
    return <ErrorPage retry={retry} />
  } else if (timedOut) return null
  else if (pastDelay) return <Loading />
  else return null
}

Handler.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  retry: PropTypes.func,
  pastDelay: PropTypes.bool,
  timedOut: PropTypes.bool,
}

export default Handler
