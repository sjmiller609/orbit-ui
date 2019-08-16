import React from 'react'
import { shallow } from 'enzyme'
import LoadingDots from '../index'

jest.useFakeTimers()

describe('LoadingDots', () => {
  it('should be defined', () => {
    expect(LoadingDots).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = shallow(<LoadingDots />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should load componentWillMount', () => {
    LoadingDots.prototype.load = jest.fn(() => {
      let dots = ''
      const timer = window.setInterval(() => {
        if (dots.length < 3) dots += '.'
        else dots = ''
        this.setState({ dots })
      }, 300)
      this.setState({ timer })
    })

    LoadingDots.prototype.unload = jest.fn(() => {
      window.clearInterval(this.state.timer)
    })

    let wrapper = shallow(<LoadingDots />)
    jest.runTimersToTime(1200)
    wrapper.unmount()
  })
})
