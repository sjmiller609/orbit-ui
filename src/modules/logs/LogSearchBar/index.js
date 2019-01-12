import React from 'react'
import PropTypes from 'prop-types'
// NOTE: Importing field styles from TextField
import classnames from 'classnames'

import { Button } from 'instruments'

import field from '../../../instruments/forms/Field/styles.scss'
import s from './styles.scss'

class LogSearchBar extends React.Component {
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
    const text = e.target.value
    this.setState({ search: text })
  }

  search() {
    const { search } = this.props
    search(this.state.search)
  }

  clear() {
    this.setState({ search: '' })
    this.props.search('')
  }

  render() {
    const { placeholder, dark, className } = this.props
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
        <Button onClick={() => this.search()}>Search</Button>
        <Button className="clear" style="beige" onClick={() => this.clear()}>Clear</Button>
      </div>
    )
  }
}

LogSearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  dark: PropTypes.bool,
  noDelay: PropTypes.bool,
}

LogSearchBar.defaultProps = {
  text: '',
  placeholder: 'Search',
}

export default LogSearchBar
