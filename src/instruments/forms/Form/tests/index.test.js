import React from 'react'
import { mountWrap } from 'helpers/tests'
import Form from '../index'

const props = {
  error: {},
  data: {},
  onSubmit: jest.fn(),
  children: React.Fragment,
  saveOnLoad: true,
  alert: true,
}

describe('Form', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Form {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
