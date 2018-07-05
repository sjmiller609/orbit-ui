import React from 'react'
import PropTypes from 'prop-types'
import { SetData, Redirect } from 'instruments'

const OnError = ({ setData }) => {
  setData.teamId(null)
  return <Redirect to="/404" />
}

OnError.propTypes = {
  setData: PropTypes.object,
}

export default SetData(OnError, { teamId: true })
