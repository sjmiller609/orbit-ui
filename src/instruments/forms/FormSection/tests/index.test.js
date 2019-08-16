import React from 'react'
import { mountWrap } from 'helpers/tests'
import FormSection from '../index'

const props = {
  title: 'Test',
  text: 'Test section',
  children: ['<p>Test child</p>'],
  className: 'testClassString',
  id: '1234',
}

describe('FormSection', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<FormSection {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
