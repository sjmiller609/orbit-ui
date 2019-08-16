import React from 'react'
import { shallow } from 'enzyme'
import ShowDate from '../index'

const props = {
  date: '2019-08-05T04:41:20',
  weekday: true,
  seconds: false,
  className: 'testClassString',
}

describe('ShowDate', () => {
  it('should be defined', () => {
    expect(ShowDate).toBeDefined()
  })

  it('renders correctly', () => {
    const wrapper = shallow(<ShowDate {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('handles no date', () => {
    const wrapper = shallow(<ShowDate {...props} date={null} />)
    expect(wrapper).toMatchSnapshot()
  })
})
