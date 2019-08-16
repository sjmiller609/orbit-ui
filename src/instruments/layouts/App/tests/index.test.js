import React from 'react'
import renderer from 'react-test-renderer'
import { mountWrap } from 'helpers/tests'
import App from '../index'

const props = {
  children: ['1', '2', '3'],
  nav: <p>Nav</p>,
  metaTitle: 'Test',
  className: 'testClassString',
  fullHeight: false,
}

const propsFullHeight = {
  ...props,
  fullHeight: true,
}

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWrap(<App {...props} />)
  })

  it('should be defined', () => {
    expect(App).toBeDefined()
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle loading func', () => {
    wrapper = renderer.create(<App {...props} />)
    const inst = wrapper.getInstance()
    const handleLoading = jest.fn(() => inst.handleLoading())
    handleLoading()
    expect(handleLoading).toHaveBeenCalled()
  })

  it('should update loading state', () => {
    wrapper.setState({ loading: false })
    const content = wrapper.find('div').at(1)
    expect(content).toBeDefined()
  })

  it('should handle full height', () => {
    wrapper = mountWrap(<App {...propsFullHeight} />)
    wrapper.setState({ loading: false })
    const content = wrapper
      .find('div')
      .at(1)
      .hasClass('fullHeight')
    expect(content).toBeTruthy()
  })
})
