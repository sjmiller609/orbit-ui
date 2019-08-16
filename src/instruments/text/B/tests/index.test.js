import React from 'react'
import { mountWrap } from 'helpers/tests'
import B from '../index'

describe('B', () => {
  it('should be defined', () => {
    expect(B).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<B className="testClassName">Children</B>)
    expect(wrapper).toMatchSnapshot()
  })
})
