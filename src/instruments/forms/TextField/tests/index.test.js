import React from 'react'
import { mountWrap } from 'helpers/tests'
import TextField from '../index'

const props = {
  type: 'text',
  placeholder: 'Test',
  name: 'test',
  id: '1234',
  onChange: jest.fn(),
  onBlur: jest.fn(),
  validate: jest.fn(),
  required: true,
  label: React.Fragment,
  value: 'test',
  title: 'Test',
  error: React.Fragment,
  className: 'testClassString',
  fieldId: 'textTextField',
  updateErrors: jest.fn(),
  setRef: jest.fn(),
  disabled: false,
}

describe('TextField', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<TextField {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
