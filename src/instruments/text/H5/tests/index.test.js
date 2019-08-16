import React from 'react'
import { mountWrap } from 'helpers/tests'
import H5 from '../index'

describe('H5', () => {
  it('should be defined', () => {
    expect(H5).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(
      <H5 className="testClassName" handleClick={jest.fn()}>
        Children
      </H5>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
