import React from 'react'
import { shallow } from 'enzyme'
import HelloBar from '../index'

const props = {
  msg: 'Test message',
  to: '/',
  button: 'Click me',
}

describe('HelloBar', () => {
  it('should be defined', () => {
    expect(HelloBar).toBeDefined()
  })

  it('renders correctly', () => {
    const wrapper = shallow(<HelloBar {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle no msg', () => {
    const wrapper = shallow(<HelloBar {...props} msg={null} />)
    expect(wrapper).toMatchSnapshot()
  })
})
