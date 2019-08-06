import React, {Component} from 'react'

import Form from 'components/Form'
import TextInput from 'components/Form/TextInput'
import Button from 'components/Button'
import OAuth from 'components/OAuth'

class NewWorkspaceForm extends Component {
  state = {
    disabled: true,
    payload: {
      label: '',
      description: ''
    },
    valid: {
      label: false
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
    const { label } = this.state.valid;
    this.setState({ disabled: label === false })
  }

  render() {
    const { handleSubmit, error, authConfig } = this.props;
    const { disabled, payload } = this.state;

    return (
      <Form handleSubmit={(e) => handleSubmit(payload, e)} error={error}>
        <TextInput
          label="Workspace Name"
          name="label"
          type="text"
          value={payload.label}
          handleChange={this.handleChange}
          required
        />
        <TextInput
          label="Description"
          name="description"
          type="text"
          value={payload.description}
          handleChange={this.handleChange}
        />
        <Button
          type="submit"
          theme="green"
          value="Create Workspace"
          disabled={disabled}
        />
      </Form>
    )
  }
}

export default NewWorkspaceForm
