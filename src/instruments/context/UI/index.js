import React from 'react'
import PropTypes from 'prop-types'

import Context from './Context'

class Provider extends React.Component {
  setSnackbar = this.setSnackbar.bind(this)
  setDialog = this.setDialog.bind(this)

  state = {
    snackbar: null, // string
    dialog: null, // object
    setSnackbar: this.setSnackbar,
    setDialog: this.setDialog,
  }

  setSnackbar(snackbar) {
    console.log(snackbar)
    this.setState({ snackbar })
  }

  setDialog(dialog) {
    this.setState({ dialog })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.element,
}

export default Provider
