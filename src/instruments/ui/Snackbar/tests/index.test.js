import React from 'react'
import { shallow } from 'enzyme'
import Snackbar from '../index'

const props = {
  msg: 'Test message',
  setMsg: jest.fn(),
}

describe('Snackbar', () => {
  it('should be defined', () => {
    expect(Snackbar).toBeDefined()
  })

  it('renders correctly', () => {
    const wrapper = shallow(<Snackbar {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('handles no msg', () => {
    const wrapper = shallow(<Snackbar {...props} msg={null} />)
    expect(wrapper).toMatchSnapshot()
  })
})
