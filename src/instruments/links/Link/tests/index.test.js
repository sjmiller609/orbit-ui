import React from 'react'
import { mountWrap } from 'helpers/tests'
import { Icon } from 'instruments'
import Link from '../index'
import A from '../A'

import { externalUrl } from '../helpers'

const props = {
  onClick: jest.fn(),
  className: 'testClassName',
  style: 'blue',
  to: '/',
}

const aProps = {
  onClick: jest.fn(),
  to: '/',
  target: '_blank',
  title: 'Test',
  id: '123',
}

describe('Link', () => {
  let wrapper = mountWrap(
    <Link {...props}>
      <p>Children</p>
    </Link>
  )

  let a = mountWrap(
    <A {...aProps}>
      <p>Children</p>
    </A>
  )

  it('should be defined', () => {
    expect(Link).toBeDefined()
    expect(A).toBeDefined()
    expect(Icon).toBeDefined()
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(a).toMatchSnapshot()
  })

  it('should handle arrows', () => {
    wrapper = mountWrap(
      <Link {...props} arrow="back">
        <p>Children</p>
      </Link>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle paths', () => {
    wrapper = mountWrap(
      <Link {...props} to={{ pathname: '/' }}>
        <p>Children</p>
      </Link>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle target', () => {
    wrapper = mountWrap(
      <Link {...props} newTab={true}>
        <p>Children</p>
      </Link>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('A should handle bool target', () => {
    a = mountWrap(
      <A {...aProps} target={false}>
        <p>Children</p>
      </A>
    )
    expect(a).toMatchSnapshot()
  })

  it('should handle external URL', () => {
    expect(externalUrl()).toBeFalsy()
    expect(externalUrl({ to: '/' })).toBeFalsy()
  })
})
