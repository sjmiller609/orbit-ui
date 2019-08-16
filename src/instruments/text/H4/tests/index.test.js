import React from 'react'
import { mountWrap } from 'helpers/tests'
import H4 from '../index'

describe('H4', () => {
  it('should be defined', () => {
    expect(H4).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<H4 className="testClassName">Children</H4>)
    expect(wrapper).toMatchSnapshot()
  })
})
