import React from 'react'
import { shallow } from 'enzyme'
import LoadingAirflow from '../index'

describe('LoadingAirflow', () => {
  it('should be defined', () => {
    expect(LoadingAirflow).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(<LoadingAirflow />)
    expect(wrapper).toMatchSnapshot()
  })
})
