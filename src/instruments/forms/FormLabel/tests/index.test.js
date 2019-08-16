import React from 'react'
import { mountWrap } from 'helpers/tests'
import FormLabel from '../index'

const props = {
  children: 'Test',
  id: '1234',
  className: 'testClassString',
  info: 'This is a form field',
}

describe('FormLabel', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<FormLabel {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
