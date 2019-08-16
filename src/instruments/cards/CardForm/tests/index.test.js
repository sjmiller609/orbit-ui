import React from 'react'
import { shallow } from 'enzyme'
import { mountWrap } from 'helpers/tests'
import { Card } from 'instruments'
import CardForm from '../index'

const props = {
  title: 'Test',
  id: '123',
  footer: <p>Footer</p>,
  button: {
    onClick: jest.fn(),
  },
  button2: {
    onClick: jest.fn(),
  },
  className: 'testClassString',
  smallForm: false,
  disable: false,
}

describe('CardForm', () => {
  let wrapper
  let card

  beforeEach(() => {
    wrapper = mountWrap(
      <CardForm {...props}>
        <div>Child</div>
      </CardForm>
    )
    card = shallow(
      <Card>
        <div>Child</div>
      </Card>
    )
  })

  it('should be defined', () => {
    expect(CardForm).toBeDefined()
    expect(Card).toBeDefined()
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(card).toMatchSnapshot()
  })

  it('should should no buttons', () => {
    wrapper = mountWrap(
      <CardForm {...props} button={null} button2={null}>
        <div>Child</div>
      </CardForm>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should should render small', () => {
    wrapper = mountWrap(
      <CardForm {...props} smallForm={true}>
        <div>Child</div>
      </CardForm>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should should render disabled', () => {
    wrapper = mountWrap(
      <CardForm {...props} disable={true} button={{ save: false }}>
        <div>Child</div>
      </CardForm>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should should render disabled', () => {
    wrapper = mountWrap(
      <CardForm {...props} disable={true} button={{ save: true }}>
        <div>Child</div>
      </CardForm>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should should render without footer', () => {
    wrapper = mountWrap(
      <CardForm {...props} footer={null}>
        <div>Child</div>
      </CardForm>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
