import React from 'react'
import { mountWrap } from 'helpers/tests'
import Redirect from '../index'

describe('Redirect', () => {
  it('should be defined', () => {
    expect(Redirect).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<Redirect to="https://google.com" />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toBeDefined()
  })

  it('should render if no to', () => {
    const wrapper = mountWrap(<Redirect />)
    expect(wrapper).toMatchSnapshot()
  })
})
