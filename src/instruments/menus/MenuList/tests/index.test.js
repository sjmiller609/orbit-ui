import React from 'react'
import { mountWrap } from 'helpers/tests'
import MenuList from '../index'

const props = {
  className: 'testClassName',
  label: 'label',
  button: {
    start: false,
    text: 'Click Me',
  },
}

describe('MenuList', () => {
  it('should be defined', () => {
    expect(MenuList).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<MenuList {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle no label', () => {
    const wrapper = mountWrap(<MenuList {...props} label={null} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle no button', () => {
    const wrapper = mountWrap(<MenuList {...props} button={null} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle button start true', () => {
    const wrapper = mountWrap(<MenuList {...props} button={{ start: true }} />)
    expect(wrapper).toMatchSnapshot()
  })
})
