import React from 'react'
import PropTypes from 'prop-types'

import { Redirect, SetData, SetUI } from 'instruments'

const Logout = ({ setData, setUI }) => {
  setData.userId(null)
  setData.teamId(null)
  setUI.snackbar("You've successfully logged out.")
  return <Redirect to="/login" />
}

Logout.propTypes = {
  setData: PropTypes.object,
  setUI: PropTypes.object,
}

export default SetUI(SetData(Logout), { snackbar: true })
