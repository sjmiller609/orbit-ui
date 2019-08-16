import React from 'react'
import { mountWrap } from 'helpers/tests'
import OauthButton from '../index'

const props = {
  service: 'google',
  displayName: 'Google',
  login: false,
  to: '/',
  className: 'testClassString',
}

describe('OauthButton', () => {
  it('should be defined', () => {
    expect(OauthButton).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<OauthButton {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render login correctly', () => {
    const wrapper = mountWrap(<OauthButton {...props} login={true} />)
    expect(wrapper).toMatchSnapshot()
  })
})
