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

            if (options.teamId) c.teamId = context.teamId
            if (options.userId) c.userId = context.userId

            const newProps = {
              ...this.props,
              setData: c,
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
