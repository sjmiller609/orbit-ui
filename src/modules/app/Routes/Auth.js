import React from 'react'
import PropTypes from 'prop-types'

import SelfData from 'modules/self/Data'

const Auth = ({ component: Component, ...props }) => {
  return <Component {...props} />
}

Auth.propTypes = {
  component: PropTypes.func,
}

export default SelfData(Auth)
