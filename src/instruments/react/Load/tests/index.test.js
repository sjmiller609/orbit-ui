import React from 'react'
import { mountWrap } from 'helpers/tests'
import Load from '../index'

describe('Load', () => {
  it('should be defined', () => {
    expect(Load).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<Load />)
    expect(wrapper).toMatchSnapshot()
  })
})
