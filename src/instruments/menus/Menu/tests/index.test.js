import React from 'react'
import { mountWrap } from 'helpers/tests'
import Menu from '../index'

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
  className: 'textClassString',
}

const propsNoProfile = {
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
  className: 'textClassString',
}

describe('Menu', () => {
  it('should be defined', () => {
    expect(Menu).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<Menu {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render default profile', () => {
    const wrapper = mountWrap(<Menu {...propsNoProfile} />)
    expect(wrapper).toMatchSnapshot()
  })
})
