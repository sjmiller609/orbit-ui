import React, {Component} from 'react'
import validator from 'validator'
import classnames from 'classnames'

import styles from './styles.module.css'

class TextInput extends Component {
  state = {
    error: null,
  }

  handleChange = e => {
    const isValid = this.handleValidation(e)
    this.props.handleChange(e, isValid)
  }

  handleValidation = e => {
    const { type } = this.props
    const value = e.target.value

    if(value === undefined) {
      this.setState({ error: 'Field cannot be empty'})
      return false
    }

    else if (type === 'email' && !validator.isEmail(value)) {
      this.setState({ error: 'Not a valid email address' })
      return false
    }

    else if (type === 'password' && validator.isEmpty(value)) {
      this.setState({ error: 'Password cannot be empty' })
      return false
    }

    else if (type === 'password' && !validator.isLength(value, {min: 7, max: 100})) {
      this.setState({ error: 'Password must at least 7 characters' })
      return false
    }

    this.setState({ error: null })
    return true
  }

  render() {
    const {
      name,
      label,
      type,
      placeholder,
      value,
      disabled,
      handleChange,
      required
    } = this.props
    const { error } = this.state
    const hasError = error != null

    const classes = classnames(
      styles.input,
      {
        [styles.error]: hasError,
        [styles.disabled]: disabled
      }
    )

    return (
      <div className={styles.container}>
        {label && (
          <label className={styles.label}>{label}</label>
        )}
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={e => this.handleChange(e)}
          className={classes}
          required={required}
        />
        {hasError && (
          <div className={styles.error}>
            <span className={styles.errorText}>{error}</span>
          </div>
        )}
      </div>
    )
  }
}

export default TextInput
