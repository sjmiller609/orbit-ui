import React from 'react'
import { mountWrap } from 'helpers/tests'
import Select from '../index'

const props = {
  name: 'test',
  id: '1234',
  onChange: jest.fn(),
  onBlur: jest.fn(),
  validate: jest.fn(),
  required: false,
  label: <label>Test</label>,
  value: 'test',
  title: 'Test',
  error: <p>Error</p>,
  className: 'testClassString',
  updateErrors: jest.fn(),
  setRef: jest.fn(),
  options: ['One', 'Two', 'Three'],
  Component: jest.fn(),
  fieldId: 'testSelect',
  disabled: false,
}

describe('Select', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Select {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
