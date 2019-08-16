import React from 'react'
import { mountWrap } from 'helpers/tests'
import LoadImg from '../index'

describe('LoadImg', () => {
  it('should be defined', () => {
    expect(LoadImg).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<LoadImg />)
    expect(wrapper).toMatchSnapshot()
  })
})
