import React from 'react'
import { shallow } from 'enzyme'
import Item from '../index'

describe('Item', () => {
  it('should be defined', () => {
    expect(Item).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(<Item />)
    expect(wrapper).toMatchSnapshot()
  })
})
