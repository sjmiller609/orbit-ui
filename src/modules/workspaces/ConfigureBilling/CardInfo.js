import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Data/Card'

//HOC to inject Card info from query into component
const CardInfo = ({ Component, ...props }) => {
  return <Component {...props} />
}

CardInfo.propTypes = {
  Component: PropTypes.func,
}

export default Card(CardInfo)
