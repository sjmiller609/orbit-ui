import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'
import TextField from '../TextField'

class Password extends React.Component {
  constructor() {
    super()
    this.toggle = this.toggle.bind(this)
    this.validate = this.validate.bind(this)
    this.state = {
      type: 'password',
    }
  }

  toggle() {
    const type = this.state.type === 'password' ? 'text' : 'password'
    this.setState({ type })
  }
  validate(value) {
    if (value.length < 7) return 'Password must be at least 7 characters'
  }

  render() {
    const { type } = this.state
    const { placeholder, name, label } = this.props

    const lock = (
      <a
        className={s.toggle}
        onClick={this.toggle}
        title={type === 'password' ? 'Show password' : 'Hide password'}>
        {type === 'password' ? '&#128274;' : '&#128275;'}
      </a>
    )

    return (
      <React.Fragment>
        <TextField
          {...this.props}
          type={type}
          placeholder={placeholder}
          name={name}
          label={
            <span>
              {label}
              {lock}
            </span>
          }
          validate={this.validate}
          required
        />
      </React.Fragment>
    )
  }
}

Password.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
}

Password.defaultProps = {
  placeholder: '*******',
  label: 'Password',
  name: 'Password',
}

export default Password
