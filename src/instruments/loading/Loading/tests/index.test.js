import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../index'

describe('Loading', () => {
  it('should be defined', () => {
    expect(Loading).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper).toMatchSnapshot()
  })
})
