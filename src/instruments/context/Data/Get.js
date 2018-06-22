import React from 'react'
import PropTypes from 'prop-types'

import { GetContext } from './Context'
import storage from '../../../helpers/storage'

const getContext = (Component, options = {}) => {
  class getContext extends React.Component {
    render() {
      return (
        <GetContext.Consumer>
          {context => {
            const c = Object.keys(options).length ? {} : context

            if (options.teamId) c.teamId = context.teamId
            if (options.userId) c.userId = context.userId

            if (c.teamId !== storage.getItem('teamId')) {
              storage.setItem('teamId', c.teamId)
            }

            const newProps = {
              ...this.props,
              getData: c,
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
