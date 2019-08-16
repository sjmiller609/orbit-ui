import React from 'react'
import { mountWrap } from 'helpers/tests'
import TextFieldSelect from '../index'

const props = {
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
  setRef: jest.fn(),
  options: ['One', 'Two', 'Three'],
  Option: jest.fn(),
  disabled: false,
}

describe('TextFieldSelect', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<TextFieldSelect {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
