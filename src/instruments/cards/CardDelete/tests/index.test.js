import React from 'react'
import { mountWrap } from 'helpers/tests'
import { SetUI, CardForm, Button, P } from 'instruments'
import CardDelete from '../index'

const props = {
  text: 'This is a test',
  buttonText: 'Button text',
  confirm: {},
  children: <p>Child</p>,
  onSubmit: jest.fn(),
  disabled: false,
  setUI: {
    dialog: null,
  },
}

const propsNoButtonText = {
  text: 'This is a test',
  confirm: {},
  children: <p>Child</p>,
  onSubmit: jest.fn(),
  disabled: false,
}

const propsNoChildren = {
  text: 'This is a test',
  buttonText: 'Button text',
  confirm: {},
  onSubmit: jest.fn(),
  disabled: false,
}

describe('CardDelete', () => {
  const Component = SetUI(CardDelete, { dialog: true })
  let wrapper

  beforeEach(() => {
    wrapper = mountWrap(<Component {...props} />)
  })

  it('should be defined', () => {
    expect(CardDelete).toBeDefined()
    expect(CardForm).toBeDefined()
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(CardForm)).toMatchSnapshot()
  })

  it('should should render default buttonText', () => {
    const diffWrapper = mountWrap(<Component {...propsNoButtonText} />)
    const diffButton = diffWrapper.find(Button)
    expect(diffButton.props().children).toEqual('Delete')
  })

  it('should should render default children', () => {
    const diffWrapper = mountWrap(<Component {...propsNoChildren} />)
    const diffChildren = diffWrapper.find(P).length
    expect(diffChildren).toEqual(1)
  })

  it('should setUI context', () => {
    // not sure how to write tests for context
  })
})
