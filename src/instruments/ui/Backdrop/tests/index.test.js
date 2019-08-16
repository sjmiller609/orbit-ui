import React from 'react'
import { mountWrap } from 'helpers/tests'
import Backdrop from '../index'

const props = {
  show: false,
  blur: false,
  close: jest.fn(),
}

describe('Backdrop', () => {
  it('should be defined', () => {
    expect(Backdrop).toBeDefined()
  })

  it('renders correctly', () => {
    const wrapper = mountWrap(<Backdrop {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should open when show is true', () => {
    const wrapper = mountWrap(<Backdrop {...props} show={true} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle blur', () => {
    const wrapper = mountWrap(<Backdrop {...props} show={true} blur={true} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle hide close', () => {
    const wrapper = mountWrap(<Backdrop {...props} show={true} close={null} />)
    expect(wrapper).toMatchSnapshot()
  })
})
