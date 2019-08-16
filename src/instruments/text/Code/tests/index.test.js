import React from 'react'
import { mountWrap } from 'helpers/tests'
import Code from '../index'

describe('Code', () => {
  it('should be defined', () => {
    expect(Code).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<Code className="testClassName">Children</Code>)
    expect(wrapper).toMatchSnapshot()
  })
})
