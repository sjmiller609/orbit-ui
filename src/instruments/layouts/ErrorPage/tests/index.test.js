import React from 'react'
import { mountWrap } from 'helpers/tests'
import ErrorPage from '../index'

const props = {
  children: ['1', '2', '3'],
  className: 'testClassString',
  retry: jest.fn(),
}

describe('ErrorPage', () => {
  it('should be defined', () => {
    expect(ErrorPage).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<ErrorPage {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render different children', () => {
    const wrapper = mountWrap(
      <ErrorPage {...props} children={null}>
        <p>Child</p>
      </ErrorPage>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
