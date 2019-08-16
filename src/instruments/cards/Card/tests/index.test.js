import React from 'react'
import { mountWrap } from 'helpers/tests'
import { Link, SetUI } from 'instruments'
import Card from '../index'

const props = {
  header: 'Test',
  children: ['<p>This is a test</p>'],
  footer: <Link>Test</Link>,
  className: 'testCardClass',
  id: '123',
}

const propsElementHeader = {
  header: <Link>Test</Link>,
  children: ['<p>This is a test</p>'],
  footer: <Link>Test</Link>,
  className: 'testCardClass',
  id: '123',
}

const propsNoHeader = {
  children: ['<p>This is a test</p>'],
  footer: <Link>Test</Link>,
  className: 'testCardClass',
  id: '123',
}

const propsNoFooter = {
  header: 'Test',
  children: ['<p>This is a test</p>'],
  className: 'testCardClass',
  id: '123',
}

describe('Card', () => {
  const Component = SetUI(Card, { dialog: true })
  let wrapper

  beforeEach(() => {
    wrapper = mountWrap(<Component {...props} />)
  })

  it('should be defined', () => {
    expect(Card).toBeDefined()
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('card checks typeof header string', () => {
    expect(typeof wrapper.props().header).toEqual('string')
  })

  it('card checks typeof header for object', () => {
    wrapper = mountWrap(<Component {...propsElementHeader} />)
    expect(typeof wrapper.props().header).toEqual('object')
  })

  it('card checks for header', () => {
    wrapper = mountWrap(<Component {...propsNoHeader} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('card checks for footer', () => {
    wrapper = mountWrap(<Component {...propsNoFooter} />)
    expect(wrapper).toMatchSnapshot()
  })
})
