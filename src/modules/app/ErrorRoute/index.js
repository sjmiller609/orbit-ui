import React from 'react'
import PropTypes from 'prop-types'

import { ErrorPage, P } from 'instruments'
import { getParams } from 'helpers/url'

const ErrorRoute = ({ location }) => {
  const params = getParams(location.search)
  return <ErrorPage>{params.error && <P>{params.error}</P>}</ErrorPage>
}

ErrorRoute.propTypes = {
  location: PropTypes.object,
}

export default ErrorRoute
