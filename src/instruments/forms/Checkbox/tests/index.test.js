import React from 'react'
import { mountWrap } from 'helpers/tests'
import Checkbox from '../index'

const props = {
  type: 'radio',
  name: 'testDeployType',
  id: '1234',
  onChange: jest.fn(),
  onBlur: jest.fn(),
  validate: jest.fn(),
  required: true,
  label: React.Fragment,
  title: 'Test Checkbox',
  error: React.Fragment,
  className: 'testClassString',
  updateErrors: jest.fn(),
  setRef: jest.fn(),
  value: 'Kubernetes',
  fieldId: 'testDeployType',
}

describe('Checkbox', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Checkbox {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
