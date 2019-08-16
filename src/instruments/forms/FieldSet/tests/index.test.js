import React from 'react'
import { mountWrap } from 'helpers/tests'
import FieldSet from '../index'

const props = {
  fieldProps: {},
  FieldType: jest.fn(),
  formField: jest.fn(),
  value: [],
  name: 'test',
  id: '1234',
  validate: jest.fn(),
  updateErrors: jest.fn(),
  onChange: jest.fn(),
  required: true,
  className: 'testClassString',
  title: 'Test',
  registerOnSubmit: jest.fn(),
}

describe('FieldSet', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<FieldSet {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
