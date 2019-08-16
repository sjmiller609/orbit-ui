import React from 'react'
import { mountWrap } from 'helpers/tests'
import H3 from '../index'

describe('H3', () => {
  it('should be defined', () => {
    expect(H3).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<H3 className="testClassName">Children</H3>)
    expect(wrapper).toMatchSnapshot()
  })
})
