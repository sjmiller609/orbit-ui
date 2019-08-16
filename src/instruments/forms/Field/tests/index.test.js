import React from 'react'
import { mountWrap } from 'helpers/tests'
import Field from '../index'

const props = {
  type: 'text',
  name: 'textField',
  id: '1234',
  onChange: jest.fn(),
  validate: jest.fn(),
  required: true,
  focus: true,
  label: React.Fragment,
  value: '',
  data: '',
  defaultValue: '',
  title: 'Test',
  error: 'Not a valid address',
  className: 'testClassString',
  updateErrors: jest.fn(),
  submitted: false,
  showError: false,
  info: 'Type your email address',
  convert: jest.fn(),
}

describe('Field', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Field {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
