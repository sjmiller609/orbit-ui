import React from 'react'
import PropTypes from 'prop-types'
import { withApollo } from 'react-apollo'
import { Redirect, SetData, SetUI } from 'instruments'

const Logout = ({ client, setData, setUI }) => {
  setData.auth(null)
  setUI.snackbar("You've successfully logged out.")
  // remove Apollo store cache
  client.resetStore()

  return <Redirect to="/login" />
}

Logout.propTypes = {
  setData: PropTypes.object,
  setUI: PropTypes.object,
  client: PropTypes.object,
}

export default withApollo(
  SetUI(SetData(Logout, { auth: true }), { snackbar: true })
)
