import React from 'react'
import { mountWrap } from 'helpers/tests'
import TextButton from '../index'

describe('TextButton', () => {
  it('should be defined', () => {
    expect(TextButton).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<TextButton>Children</TextButton>)
    expect(wrapper).toMatchSnapshot()
  })
})
