import React from 'react'
import { Snackbar, ContextUI } from '../../../instruments'
import PropTypes from 'prop-types'

const UI = ({ context: { snackbar } }) => {
  return (
    <React.Fragment>
      <Snackbar msg={snackbar} />
    </React.Fragment>
  )
}

UI.propTypes = {
  snackbar: PropTypes.string,
  dialog: PropTypes.object,
  context: PropTypes.object,
}

export default ContextUI(UI)
