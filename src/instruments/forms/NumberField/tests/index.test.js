import React from 'react'
import { mountWrap } from 'helpers/tests'
import NumberField from '../index'

const props = {
  placeholder: 'test',
  name: 'test',
  id: '1234',
  onChange: jest.fn(),
  onBlur: jest.fn(),
  validate: jest.fn(),
  required: false,
  focus: false,
  label: React.Fragement,
  value: 5,
  title: 'Test',
  error: React.Fragement,
  className: 'textClassString',
  updateErrors: jest.fn(),
  setRef: jest.fn(),
  min: 1,
  max: 10,
  step: 1,
  slider: false,
  units: 'AU',
  convert: jest.fn(),
  fieldId: 'testField',
  disabled: false,
}

describe('NumberField', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<NumberField {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
