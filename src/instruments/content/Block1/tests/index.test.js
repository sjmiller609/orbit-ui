import React from 'react'
import { mountWrap } from 'helpers/tests'
import { Link } from 'instruments'
import Block1 from '../index'

const props = {
  left: <Link>Test</Link>,
  right: <Link>Test</Link>,
  title: 'Test',
  text: 'This is a test',
  children: ['<p>This is a test</p>'],
  className: 'testClassString',
}

describe('Block1', () => {
  it('should be defined', () => {
    expect(Block1).toBeDefined()
  })

  it('renders correctly', () => {
    const wrapper = mountWrap(<Block1 {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('handles no right', () => {
    const wrapper = mountWrap(<Block1 {...props} right={null} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('handles no left', () => {
    const wrapper = mountWrap(<Block1 {...props} left={null} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('handles no text', () => {
    const wrapper = mountWrap(<Block1 {...props} text={null} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('handles no title', () => {
    const wrapper = mountWrap(<Block1 {...props} title={null} />)
    expect(wrapper).toMatchSnapshot()
  })
})
