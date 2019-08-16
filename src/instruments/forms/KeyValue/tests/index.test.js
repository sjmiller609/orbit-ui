import React from 'react'
import { mountWrap } from 'helpers/tests'
import KeyValue from '../index'

const props = {
  keyProps: {},
  KeyField: jest.fn(),
  valueProps: {},
  ValueField: jest.fn(),
  formField: jest.fn(),
  onChange: jest.fn(),
  value: {},
  name: 'test',
  id: '1234',
  validate: jest.fn(),
  updateErrors: jest.fn(),
  required: true,
  className: 'textClassString',
  showError: false,
}

describe('KeyValue', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<KeyValue {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
