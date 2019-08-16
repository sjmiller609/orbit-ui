import React from 'react'
import { mountWrap } from 'helpers/tests'
import CardRow from '../index'

const props = {
  children: ['<p>This is a test</p>'],
  className: 'testClassString',
}

const propsDiffChildren = {
  children: <p key="1">This is a test</p>,
  className: 'testClassString',
}

describe('CardRow', () => {
  it('should be defined', () => {
    expect(CardRow).toBeDefined()
  })

  it('renders correctly', () => {
    const wrapper = mountWrap(<CardRow {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders different children correctly', () => {
    const wrapper = mountWrap(<CardRow {...propsDiffChildren} />)
    expect(wrapper).toMatchSnapshot()
  })
})
