import React from 'react'
import { mountWrap } from 'helpers/tests'
import UnsavedChangesAlert from '../index'

const props = {
  alert: true,
}

describe('UnsavedChangesAlert', () => {
  it('renders correctly', () => {
    const wrapper = mountWrap(<UnsavedChangesAlert {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
