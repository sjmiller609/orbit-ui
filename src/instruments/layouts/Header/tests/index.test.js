import React from 'react'
import { mountWrap } from 'helpers/tests'
import { Menu, SubMenu } from 'instruments'
import Header from '../index'

const props = {
  level1: {
    selected: {
      to: '#',
      id: '123',
      text: 'Workspace Label',
    },
    list: [],
    addNew: {
      to: '/workspaces/new',
      text: 'New Workspace',
    },
  },
  level2: {
    selected: {
      to: '#',
      id: '123',
      text: 'Workspace Label',
    },
    list: [],
    addNew: {
      to: '/workspaces/new',
      text: 'New Workspace',
    },
  },
  profile: {
    platform: self.isAdmin,
  },
  subMenu: [],
  className: 'textClassString',
}

describe('Header', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined()
    expect(Menu).toBeDefined()
    expect(SubMenu).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<Header {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
