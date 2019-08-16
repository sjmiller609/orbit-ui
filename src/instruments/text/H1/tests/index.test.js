import React from 'react'
import { mountWrap } from 'helpers/tests'
import H1 from '../index'

describe('H1', () => {
  it('should be defined', () => {
    expect(H1).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<H1 className="testClassName">Children</H1>)
    expect(wrapper).toMatchSnapshot()
  })
})
