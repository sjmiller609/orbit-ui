import React from 'react'
import { mountWrap } from 'helpers/tests'
import CardLoading from '../index'

const props = {
  className: 'testClassString',
}

describe('CardLoading', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<CardLoading {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
