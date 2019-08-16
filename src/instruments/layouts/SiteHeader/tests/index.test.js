import React from 'react'
import { mountWrap } from 'helpers/tests'
import { Row, Logo } from 'instruments'
import SiteHeader from '../index'

describe('SiteHeader', () => {
  it('should be defined', () => {
    expect(SiteHeader).toBeDefined()
    expect(Row).toBeDefined()
    expect(Logo).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(
      <SiteHeader>
        <p>Children</p>
      </SiteHeader>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render dark correctly', () => {
    const wrapper = mountWrap(
      <SiteHeader dark={true}>
        <p>Children</p>
      </SiteHeader>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
