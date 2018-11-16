'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import Mutation from '../Mutation'

const Upgrade = ({ ...props }) => {
  return <Mutation {...props} />
}

Upgrade.propTypes = {
  query: PropTypes.object,
}

export default Upgrade
