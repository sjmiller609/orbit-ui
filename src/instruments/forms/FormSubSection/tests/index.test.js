import React from 'react'
import { mountWrap } from 'helpers/tests'
import FormSubSection from '../index'

const props = {
  title: 'Test',
  children: ['<p>Test child</p>'],
  className: 'testClassString',
  id: '1234',
}

describe('FormSection', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<FormSubSection {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
