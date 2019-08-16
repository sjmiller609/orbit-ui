import React from 'react'
import { mountWrap } from 'helpers/tests'
import Password from '../index'

const props = {
  placeholder: 'Password',
  label: 'Password',
  name: 'password',
  confirm: 'Confirm',
}

describe('Password', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<Password {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
