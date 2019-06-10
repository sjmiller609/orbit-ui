'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import s from './styles.scss'

import { Page } from 'instruments'

// Wrapper for all modules
//
// FullHeight is a way for child modules to signal that this wrapper should
// be 100% height. This was added to primarily allow the log view to be "full height",
// while allowing the other pages to behave normally, while also maintaining the bottom padding
// we add via the content class. If every module was "full height", the padding does not work.
// There may be a better way to do this.
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentWillMount() {
    setTimeout(this.handleLoading, 100)
  }

  handleLoading = () => {
    this.setState({ loading: false })
  }

  render() {
    const { children, nav, metaTitle, className, fullHeight } = this.props
    const { loading } = this.state
    return (
      <Page className={classnames(s.module, className)} metaTitle={metaTitle}>
        {nav}
        {!loading && (
          <div
            className={classnames(s.content, fullHeight ? s.fullHeight : '')}>
            {children}
          </div>
        )}
      </Page>
    )
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
  nav: PropTypes.element,
  metaTitle: PropTypes.string,
  className: PropTypes.string,
  fullHeight: PropTypes.bool,
}

export default App
