import React from 'react'
import { mountWrap } from 'helpers/tests'
import P from '../index'

describe('P', () => {
  it('should be defined', () => {
    expect(P).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountWrap(<P className="testClassName">Children</P>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle center', () => {
    const wrapper = mountWrap(
      <P className="testClassName" center={true}>
        Children
      </P>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
