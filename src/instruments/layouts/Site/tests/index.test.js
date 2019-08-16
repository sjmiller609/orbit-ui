import React from 'react'
import { mountWrap } from 'helpers/tests'
import { Page } from 'instruments'
import Site from '../index'

describe('Site', () => {
  it('should be defined', () => {
    expect(Site).toBeDefined()
    expect(Page).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(
      <Site>
        <p>Children</p>
      </Site>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
