import React from 'react'
import { shallow } from 'enzyme'
import Item from '../../Item'
import Level1 from '../index'

const props = {
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
  active: true,
  className: 'testClassString',
}

describe('Level1', () => {
  it('should be defined', () => {
    expect(Level1).toBeDefined()
    expect(Item).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(<Level1 {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
