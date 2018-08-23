'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
// NOTE: Importing field styles from TextField
import field from '../Field/styles.scss'
import classnames from 'classnames'

import { LoadingDots } from 'instruments'

class Search extends React.Component {
  timeout = null
  type = this.type.bind(this)
  clear = this.clear.bind(this)
  state = {
    typing: null,
    search: this.props.text,
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  type(e) {
    e.preventDefault()
    const { noDelay, search } = this.props
    const text = e.target.value
    this.setState({ search: text })

    if (noDelay) search(e.target.value)
    else {
      // put 1 second delay on actual search from when stop typing
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.props.search(text)
        clearTimeout(this.timeout)
      }, 1000)
    }
  }

  clear(e) {
    e.preventDefault()

    this.setState({ search: '' })
    this.props.search('')
  }

  render() {
    const { placeholder, text, dark, className } = this.props
    const { search } = this.state

    return (
      <div
        className={classnames(
          field.field,
          s.search,
          className,
          dark ? s.dark : null
        )}>
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={this.type}
          className={s.input}
        />
        {search !== text ? (
          <div className={s.searching}>
            <LoadingDots />
          </div>
        ) : (
          text && (
            <div className={s.clear} onClick={this.clear}>
              x
            </div>
          )
        )}
      </div>
    )
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  dark: PropTypes.bool,
  noDelay: PropTypes.bool,
}

Search.defaultProps = {
  text: '',
  placeholder: 'Search',
  dark: false,
}

export default Search
