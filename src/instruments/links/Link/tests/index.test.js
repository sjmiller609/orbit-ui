import React from 'react'
import { mountWrap } from 'helpers/tests'
import Link from '../index'

describe('Link', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Link>text</Link>)
    expect(wrapper).toMatchSnapshot()
  })
  it('displays arrow icon when `arrow` is specified', () => {
    const wrapper = mountWrap(<Link arrow="arrow">text</Link>)
    expect(wrapper).toMatchSnapshot()
  })
  it('displays back arrow icon when `backArrow` is specified', () => {
    const wrapper = mountWrap(<Link backArrow="arrow_darkBg">text</Link>)
    expect(wrapper).toMatchSnapshot()
  })
  it('is external url - http', () => {
    const wrapper = mountWrap(<Link to="https://www.astronomer.io">text</Link>)
    expect(wrapper).toMatchSnapshot()
  })
  it('is external url - www', () => {
    const wrapper = mountWrap(<Link to="www.astronomer.io">text</Link>)
    expect(wrapper).toMatchSnapshot()
  })
  it('is external url - naked', () => {
    const wrapper = mountWrap(<Link to="astronomer.io">text</Link>)
    expect(wrapper).toMatchSnapshot()
  })
  it('is internal route - with slash', () => {
    const wrapper = mountWrap(<Link to="/deployments">text</Link>)
    expect(wrapper).toMatchSnapshot()
  })
  it('is internal route - no slash', () => {
    const wrapper = mountWrap(<Link to="deployments">text</Link>)
    expect(wrapper).toMatchSnapshot()
  })
  it('is active route', () => {
    const wrapper = mountWrap(
      <Link to="/deployments" activeClassName="active">
        text
      </Link>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
