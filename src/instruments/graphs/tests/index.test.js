import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Brownie from '../Brownie'
import Complexline from '../Complexline'
import ContainerList from '../ContainerList'
import Gauge from '../Gauge'
import Sparkline from '../Sparkline'
import Stream from '../Stream'
import TaskStatus from '../TaskStatus'

import { ResponsiveLine } from '@nivo/line'

const convert = jest.fn()

const brownieProps = {
  slices: ['1', '2', '3'],
  className: 'testClassString',
  title: 'Test',
  convert,
  total: 400,
  part: 100,
}

const mockMetric = {
  metric: [],
  label: 'AU',
}

const labels = ['GB', 'kB/s', '%', 'ops']

describe('Graphs', () => {
  let brownie
  let complexLine
  let containerList
  let gauge
  let sparkLine
  let stream
  let taskStatus

  beforeEach(() => {
    brownie = shallow(<Brownie {...brownieProps} />)
    complexLine = renderer.create(<Complexline {...mockMetric} />)
    containerList = shallow(<ContainerList {...mockMetric} />)
    gauge = shallow(<Gauge />)
    sparkLine = shallow(<Sparkline {...mockMetric} />)
    stream = shallow(<Stream {...mockMetric} />)
    taskStatus = shallow(<TaskStatus {...mockMetric} />)
  })

  it('should be defined', () => {
    expect(Brownie).toBeDefined()
    expect(Complexline).toBeDefined()
    expect(ContainerList).toBeDefined()
    expect(Gauge).toBeDefined()
    expect(Sparkline).toBeDefined()
    expect(Stream).toBeDefined()
    expect(TaskStatus).toBeDefined()
  })

  it('should render correctly', () => {
    expect(brownie).toMatchSnapshot()
    expect(complexLine).toMatchSnapshot()
    expect(containerList).toMatchSnapshot()
    expect(gauge).toMatchSnapshot()
    expect(sparkLine).toMatchSnapshot()
    expect(stream).toMatchSnapshot()
    expect(taskStatus).toMatchSnapshot()
  })

  it('graph imports should be defined', () => {
    expect(ResponsiveLine).toBeDefined()
  })

  it(`complexline should format labels correctly`, () => {
    labels.map(label => {
      const newComplexLine = renderer.create(<Complexline label={label} />)
      const inst = newComplexLine.getInstance()
      expect(inst.formatValue(123)).toMatchSnapshot()
    })
  })

  it(`complexline should format data correctly`, () => {
    labels.map(label => {
      const newComplexLine = renderer.create(<Complexline label={label} />)
      const inst = newComplexLine.getInstance()
      expect(inst.formatData([])).toMatchSnapshot()
    })
  })
})
