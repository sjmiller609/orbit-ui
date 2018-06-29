import React from 'react'
import PropTypes from 'prop-types'

import { SetContext } from './Context'

const setContext = (Component, options = {}) => {
  class setContext extends React.Component {
    render() {
      return (
        <SetContext.Consumer>
          {context => {
            const c = Object.keys(options).length ? {} : context

            if (options.snackbar) c.snackbar = context.snackbar
            if (options.dialog) c.dialog = context.dialog
            if (options.loading) c.loading = context.loading

            const newProps = {
              ...this.props,
              setUI: c,
            }
            return <Component {...newProps} />
          }}
        </SetContext.Consumer>
      )
    }
  }

  setContext.propTypes = {
    options: PropTypes.object,
  }

  return setContext
}

export default setContext
