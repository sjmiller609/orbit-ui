import React from 'react'
import { mountWrap } from 'helpers/tests'
import Flex from '../index'

const props = {
  id: '1234',
  children: ['<p>This is a test</p>'],
  className: 'testClassString',
  passRef: jest.fn(),
  justify: 'space-between',
  align: 'center',
  flow: 'row',
  wrap: false,
  auto: false,
  full: false,
  onClick: jest.fn(),
}

describe('Flex', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Flex {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render full', () => {
    const wrapper = mountWrap(<Flex {...props} full={true} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('shoulnd render auto', () => {
    const wrapper = mountWrap(<Flex {...props} auto={true} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render wrap', () => {
    const wrapper = mountWrap(<Flex {...props} wrap={true} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('shoulnd render full, auto & wrap', () => {
    const wrapper = mountWrap(
      <Flex {...props} full={true} auto={true} wrap={true} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
