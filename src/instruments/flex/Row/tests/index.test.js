import React from 'react'
import { mountWrap } from 'helpers/tests'
import Row from '../index'

describe('Row', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Row />)
    expect(wrapper).toMatchSnapshot()
  })
})
