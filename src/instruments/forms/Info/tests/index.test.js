import React from 'react'
import { mountWrap } from 'helpers/tests'
import Info from '../index'

const props = {
  children: 'Test information text',
}

describe('Info', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Info {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
