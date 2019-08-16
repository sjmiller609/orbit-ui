import React from 'react'
import { shallow } from 'enzyme'
import { mountWrap } from 'helpers/tests'
import CardMenu from '../index'
import Menu from '../Menu'

const menu = [
  {
    text: 'API Key',
    id: 'apiKey',
  },
  {
    text: 'Configure',
    id: 'configure',
  },
  {
    text: 'Delete',
    id: 'delete',
    newForm: true,
  },
]

const menuList = {
  button: {
    text: 'Back',
    backArrow: 'arrow',
    style: 'blue',
    to: '/',
  },
}

const props = {
  title: 'Test',
  id: '1234',
  children: ['<p>This is a test</p>'],
  className: 'testClassString',
  menu,
  menuList,
}

const menuProps = {
  active: 'apiKey',
  id: '123',
  title: 'Test',
  className: 'testClassString',
  menu,
  menuList,
}

const propsNoScroll = {
  ...props,
  menu: [],
}

describe('CardMenu', () => {
  let wrapper
  let menu

  beforeEach(() => {
    wrapper = mountWrap(<CardMenu {...props} />)
    menu = shallow(<Menu {...menuProps} />)
  })

  it('should be defined', () => {
    expect(CardMenu).toBeDefined()
    expect(Menu).toBeDefined()
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(menu).toMatchSnapshot()
  })

  it('should handle sticky', () => {
    wrapper.setState({ sticky: true })
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle scroll disabled', () => {
    wrapper = mountWrap(<CardMenu {...propsNoScroll} />)
    expect(wrapper).toMatchSnapshot()
  })
})
