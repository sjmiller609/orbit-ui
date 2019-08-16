import React from 'react'
import { mountWrap } from 'helpers/tests'
import Search from '../index'

const props = {
  search: jest.fn(),
  text: 'Test',
  placeholder: 'Search',
  className: 'testClassString',
  dark: false,
  noDelay: true,
}

describe('Search', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Search {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
