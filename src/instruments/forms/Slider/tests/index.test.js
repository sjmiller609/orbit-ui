import React from 'react'
import { mountWrap } from 'helpers/tests'
import Slider from '../index'

const props = {
  min: 1,
  max: 10,
  value: 5,
  step: 1,
  onChange: jest.fn(),
  className: 'testClassString',
  disabled: false,
}

describe('Slider', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Slider {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
