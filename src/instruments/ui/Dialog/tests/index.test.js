import React from 'react'
import { mountWrap } from 'helpers/tests'
import { Button } from 'instruments'
import Dialog from '../index'

const fakeClick = jest.fn()
const fakeClose = jest.fn()

const props = {
  title: 'Test',
  text: 'Testing the dialog.',
  button: {
    onClick: fakeClick,
  },
  close: fakeClose,
}

const propsNoButton = {
  title: 'Test',
  text: 'Testing the dialog.',
  close: fakeClose,
}

describe('Dialog', () => {
  it('should be defined', () => {
    expect(Dialog).toBeDefined()
  })

  it('renders correctly', () => {
    const wrapper = mountWrap(<Dialog {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle no title', () => {
    const wrapper = mountWrap(<Dialog {...props} title={null} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle no text', () => {
    const wrapper = mountWrap(<Dialog {...props} text={null} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle no content', () => {
    const wrapper = mountWrap(<Dialog {...props} text={null} title={null} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle default onClick', () => {
    const wrapper = mountWrap(<Dialog {...propsNoButton} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle onClick', () => {
    const wrapper = mountWrap(<Dialog {...props} />)
    const button = wrapper.find(Button).at(1)
    button.props().onClick()
    expect(fakeClick).toHaveBeenCalled()
    expect(fakeClose).toHaveBeenCalled()
  })
})
