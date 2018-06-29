import React from 'react'
import { Snackbar, Dialog, Loading, SetUI, GetUI } from 'instruments'
import PropTypes from 'prop-types'

const UI = ({ getUI, setUI }) => {
  return (
    <React.Fragment>
      {getUI.loading && <Loading />}
      <Snackbar msg={getUI.snackbar} setMsg={setUI.snackbar} />
      <Dialog close={() => setUI.dialog(null)} {...getUI.dialog} />
    </React.Fragment>
  )
}

UI.propTypes = {
  snackbar: PropTypes.string,
  dialog: PropTypes.object,
  getUI: PropTypes.object,
  setUI: PropTypes.object,
}

export default SetUI(GetUI(UI))
