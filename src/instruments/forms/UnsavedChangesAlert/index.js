import React from 'react'
import PropTypes from 'prop-types'

import { Prompt } from 'react-router-dom'

class UnsavedChangesAlert extends React.Component {
  mounted = null
  state = {
    alerted: null,
  }

  render() {
    return (
      <Prompt
        when={this.props.alert && !this.state.alerted}
        message={() => {
          this.setState({ alerted: true })
          return 'You have unsaved changes. Are you sure you wish to leave this page?'
        }}
      />
    )
  }
}

UnsavedChangesAlert.propTypes = {
  alert: PropTypes.bool,
}

export default UnsavedChangesAlert
