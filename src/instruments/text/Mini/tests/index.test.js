import React from 'react'
import { mountWrap } from 'helpers/tests'
import Mini from '../index'

describe('Mini', () => {
  it('should be defined', () => {
    expect(Mini).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<Mini className="testClassName">Children</Mini>)
    expect(wrapper).toMatchSnapshot()
  })
})
