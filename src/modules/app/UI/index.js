import React from 'react'
import { Snackbar, GetUI } from '../../../instruments'
import PropTypes from 'prop-types'

const UI = ({ getUI }) => {
  return (
    <React.Fragment>
      <Snackbar msg={getUI.snackbar} />
    </React.Fragment>
  )
}

UI.propTypes = {
  snackbar: PropTypes.string,
  dialog: PropTypes.object,
  getUI: PropTypes.object,
}

export default GetUI(UI)
