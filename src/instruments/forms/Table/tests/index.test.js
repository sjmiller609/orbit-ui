import React from 'react'
import { mountWrap } from 'helpers/tests'
import Table from '../index'

const props = {
  fieldProps: {},
  FieldType: jest.fn(),
  formField: jest.fn(),
  Row: jest.fn(),
  Empty: jest.fn(),
  getRowProps: jest.fn(),
  value: ['One'],
  name: 'test',
  id: '1234',
  validate: jest.fn(),
  updateErrors: jest.fn(),
  onChange: jest.fn(),
  required: true,
  className: 'testClassString',
  title: 'Test',
  registerOnSubmit: jest.fn(),
  data: {},
  unique: false,
}

describe('Table', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Table {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
