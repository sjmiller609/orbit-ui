import React from 'react'
import { mountWrap } from 'helpers/tests'
import Button from '../index'

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(
      <Button>
        <p>Children</p>
      </Button>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render to correctly', () => {
    const wrapper = mountWrap(
      <Button to="/">
        <p>Children</p>
      </Button>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should not preventDefault', () => {
    const wrapper = mountWrap(
      <Button to="/" disabled={false}>
        <p>Children</p>
      </Button>
    )
    const event = { preventDefault: () => {} }
    jest.spyOn(event, 'preventDefault')
    wrapper.simulate('click', event)
    expect(event.preventDefault).not.toBeCalled()
  })

  it('should preventDefault if disabled', () => {
    const wrapper = mountWrap(
      <Button to="/" disabled={true}>
        <p>Children</p>
      </Button>
    )
    const event = { preventDefault: () => {} }
    jest.spyOn(event, 'preventDefault')
    wrapper.simulate('click', event)
    expect(event.preventDefault).toBeCalled()
  })

  it('should handle full height', () => {
    const wrapper = mountWrap(
      <Button disabled={true}>
        <p>Children</p>
      </Button>
    )
    const hasClass = wrapper.find('button').hasClass('disabled')
    expect(hasClass).toBeTruthy()
  })
})
