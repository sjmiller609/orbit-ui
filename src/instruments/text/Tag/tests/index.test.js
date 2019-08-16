import React from 'react'
import { mountWrap } from 'helpers/tests'
import Tag from '../index'

describe('Tag', () => {
  it('should be defined', () => {
    expect(Tag).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<Tag className="testClassName">Children</Tag>)
    expect(wrapper).toMatchSnapshot()
  })
})
