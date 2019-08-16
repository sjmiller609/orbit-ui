import React from 'react'
import { mountWrap } from 'helpers/tests'
import ProfileMenu from '../index'

describe('ProfileMenu', () => {
  it('should be defined', () => {
    expect(ProfileMenu).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<ProfileMenu />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render admin link', () => {
    const wrapper = mountWrap(<ProfileMenu platform={true} />)
    expect(wrapper).toMatchSnapshot()
  })
})
