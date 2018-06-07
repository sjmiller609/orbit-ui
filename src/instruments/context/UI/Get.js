import React from 'react'
import PropTypes from 'prop-types'

import { GetContext } from './Context'

const getContext = (Component, options = {}) => {
  class getContext extends React.Component {
    render() {
      return (
        <GetContext.Consumer>
          {context => {
            console.log(context)
            const c = Object.keys(options).length ? {} : context

            if (options.snackbar) c.snackbar = context.snackbar
            if (options.dialog) c.dialog = context.dialog
            // if (options.setSnackbar) c.setSnackbar = context.setSnackbar
            // if (options.setDialog) c.setDialog = context.setDialog
            const newProps = {
              ...this.props,
              getUI: c,
            }
            return <Component {...newProps} />
          }}
        </GetContext.Consumer>
      )
    }
  }

  getContext.propTypes = {
    options: PropTypes.object,
  }

  return getContext
}

export default getContext
