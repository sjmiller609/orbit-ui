import React from 'react'
import { mountWrap } from 'helpers/tests'
import ScrollToTop from '../index'

const props = {
  location: {},
}

describe('ScrollToTop', () => {
  it('should be defined', () => {
    expect(ScrollToTop).toBeDefined()
  })

  it('renders correctly', () => {
    const wrapper = mountWrap(<ScrollToTop {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
