import React from 'react'
import { mountWrap } from 'helpers/tests'
import { Helmet } from 'react-helmet'
import Page from '../index'

describe('Page', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWrap(
      <Page>
        <p>Children</p>
      </Page>
    )
  })

  it('should be defined', () => {
    expect(Page).toBeDefined()
    expect(Helmet).toBeDefined()
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
