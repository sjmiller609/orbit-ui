import React from 'react'
import { mountWrap } from 'helpers/tests'
import { LoadImg } from 'instruments'

import CardError from '../index'
const Astronaut = LoadImg(() => import(`./astronaut.svg`))

const props = {
  children: ['<p>Test</p>'],
  className: 'testClassString',
  retry: jest.fn(),
}

describe('CardError', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWrap(<CardError {...props} />)
  })

  it('should be defined', () => {
    expect(CardError).toBeDefined()
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have icon', () => {
    const icon = wrapper.find(Astronaut)
    expect(icon).toMatchSnapshot()
  })
})
