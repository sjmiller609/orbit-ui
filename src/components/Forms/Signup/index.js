import React, {Component} from 'react'

import Form from 'components/Form'
import TextInput from 'components/Form/TextInput'
import Button from 'components/Button'
import OAuth from 'components/OAuth'

class SignupForm extends Component {
  state = {
    disabled: true,
    payload: {
      email: '',
      password: ''
    },
    valid: {
      email: false,
      password: false
    }
  }

  handleChange = (e, isValid) => {
    this.setState(
      {
        payload: {
          ...this.state.payload,
          [e.target.name]: e.target.value,
        },
        valid: {
          ...this.state.valid,
          [e.target.name]: isValid,
        }
      },
      () => this.handleDisabled()
    )
  }

  handleDisabled = () => {
    const { email, password } = this.state.valid;
    this.setState({
      disabled: email === false || password === false
    })
  }

  render() {
    const { handleSubmit, error, authConfig } = this.props;
    const { disabled, payload } = this.state;

    return (
      <Form handleSubmit={(e) => handleSubmit(payload, e)} error={error}>
        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder="you@yourcompany.com"
          value={payload.email}
          handleChange={this.handleChange}
          required
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          placeholder="Minimum of 7 characters"
          value={payload.password}
          handleChange={this.handleChange}
          required
        />
        <Button
          type="submit"
          theme="green"
          value="Sign up"
          disabled={disabled}
        />
        {authConfig != undefined
          ? <OAuth action="Signup" authConfig={authConfig} />
          : <p>Error getting OAuth providers</p>
        }
      </Form>
    )
  }
}

export default SignupForm
