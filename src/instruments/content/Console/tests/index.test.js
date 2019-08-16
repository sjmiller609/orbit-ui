import React from 'react'
import { mountWrap } from 'helpers/tests'
import Console from '../index'

const props = {
  children: ['<p>This is a test</p>'],
  className: 'testClassString',
}

describe('Console', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWrap(<Console {...props} />)
  })

  it('should be defined', () => {
    expect(Console).toBeDefined()
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle pause', () => {
    wrapper.setState({ pause: true })
    expect(wrapper).toMatchSnapshot()
  })
})
