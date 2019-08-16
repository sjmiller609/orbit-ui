import React from 'react'
import { mountWrap } from 'helpers/tests'
import TextArea from '../index'

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
  className: 'textClassString',
  fieldId: 'testTextArea',
  updateErrors: jest.fn(),
  setRef: jest.fn(),
  disabled: false,
}

describe('TextArea', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<TextArea {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
