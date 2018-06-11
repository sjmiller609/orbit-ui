import React from 'react'
import PropTypes from 'prop-types'

import { GetContext, SetContext } from './Context'

class Provider extends React.Component {
  setSnackbar = this.setSnackbar.bind(this)
  setDialog = this.setDialog.bind(this)

  state = {
    snackbar: null, // string
    dialog: null, // object { title, text, button { text, onClick }}
  }

  set = {
    snackbar: this.setSnackbar,
    dialog: this.setDialog,
  }

  setSnackbar(snackbar) {
    this.setState({ snackbar })
  }

  setDialog(dialog) {
    this.setState({ dialog })
  }

  render() {
    return (
      <SetContext.Provider value={this.set}>
        <GetContext.Provider value={this.state}>
          {this.props.children}
        </GetContext.Provider>
      </SetContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.element,
}

export default Provider
