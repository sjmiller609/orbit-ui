'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import classnames from 'classnames'

import { LoadingDots } from '../../../instruments'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.timeout = null
    this.type = this.type.bind(this)
    this.state = {
      typing: null,
      search: this.props.text,
    }
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

  render() {
    const { placeholder, text, dark } = this.props
    const { search } = this.state

    return (
      <div className={classnames(s.search, dark ? s.dark : null)}>
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
        ) : null}
      </div>
    )
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  dark: PropTypes.bool,
  noDelay: PropTypes.bool,
}

Search.defaultProps = {
  text: '',
  placeholder: 'Search',
  dark: false,
}

export default Search
