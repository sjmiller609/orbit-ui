import React from 'react'
import { mountWrap } from 'helpers/tests'
import H2 from '../index'

describe('H2', () => {
  it('should be defined', () => {
    expect(H2).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<H2 className="testClassName">Children</H2>)
    expect(wrapper).toMatchSnapshot()
  })
})
