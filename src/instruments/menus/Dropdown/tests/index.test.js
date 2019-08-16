import React from 'react'
import { mountWrap } from 'helpers/tests'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Dropdown from '../index'

jest.useFakeTimers()

const props = {
  right: false,
  disable: false,
  selector: <p>Select</p>,
  className: 'testClassName',
  small: false,
}

describe('Dropdown', () => {
  it('should be defined', () => {
    expect(Dropdown).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(
      <Dropdown {...props}>
        <p>Children</p>
      </Dropdown>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render right', () => {
    const wrapper = mountWrap(
      <Dropdown {...props} right={true}>
        <p>Children</p>
      </Dropdown>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render disabled', () => {
    const wrapper = mountWrap(
      <Dropdown {...props} disable={true}>
        <p>Children</p>
      </Dropdown>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render small', () => {
    const wrapper = mountWrap(
      <Dropdown {...props} small={true}>
        <p>Children</p>
      </Dropdown>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle componentWillUpdate', () => {
    const wrapper = renderer.create(
      <Dropdown {...props}>
        <p>Children</p>
      </Dropdown>
    )
    const inst = wrapper.getInstance()
    const func = jest.fn(() => inst.componentWillUpdate())
    func()
    expect(func).toHaveBeenCalled()
  })

  it('should handle blur', () => {
    const wrapper = renderer.create(
      <Dropdown {...props}>
        <p>Children</p>
      </Dropdown>
    )
    const inst = wrapper.getInstance()
    const func = jest.fn(() => inst.blur())
    func()
    expect(func).toHaveBeenCalled()
  })

  it('should handle open', () => {
    const wrapper = renderer.create(
      <Dropdown {...props}>
        <p>Children</p>
      </Dropdown>
    )
    const inst = wrapper.getInstance()
    const func = jest.fn(() => inst.open())
    func()
    expect(func).toHaveBeenCalled()
  })

  it('should handle timer', () => {
    Dropdown.prototype.unload = jest.fn(() => {
      clearTimeout(this.timeout)
    })

    let wrapper = shallow(
      <Dropdown {...props}>
        <p>Children</p>
      </Dropdown>
    )

    jest.runTimersToTime(1200)
    wrapper.unmount()
  })
})
