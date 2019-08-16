import React from 'react'
import { mountWrap } from 'helpers/tests'
import Box from '../index'

describe('Box', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Box />)
    expect(wrapper).toMatchSnapshot()
  })
})
