'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query } from '../../../instruments'

const Data = Component => {
  console.log(Component)

  const Data = ({ data, ...otherProps }) => {
    const newProps = {
      ...otherProps,
      data,
    }
    return <Component {...newProps} />
  }

  Data.propTypes = {
    data: PropTypes.object,
  }

  return Query(Data, api.Deployments)
}

export default Data
