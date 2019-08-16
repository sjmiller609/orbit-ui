import React from 'react'
import { mountWrap } from 'helpers/tests'
import SubMenu from '../index'

describe('SubMenu', () => {
  it('should be defined', () => {
    expect(SubMenu).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<SubMenu />)
    expect(wrapper).toMatchSnapshot()
  })
})
