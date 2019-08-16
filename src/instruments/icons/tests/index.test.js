import React from 'react'
import { mountWrap } from 'helpers/tests'
import Icon from '../Icon'
import Logo from '../Logo'
import Avatar from '../Avatar'
import Airflow from '../Airflow'
import Triangle from '../Triangle'

const props = {}

const avatarIconProps = {
  title: 'Test',
  className: 'testClassName',
}

const avatarImgProps = {
  url: '/',
  title: 'Test',
  className: 'testClassName',
}

const logoProps = {
  to: '/',
  className: 'textClassName',
}

describe('Icons', () => {
  let icon
  let logo
  let avatar
  let airflow
  let triangle

  beforeEach(() => {
    icon = mountWrap(<Icon {...props} />)
    logo = mountWrap(<Logo {...logoProps} />)
    avatar = mountWrap(<Avatar {...avatarImgProps} />)
    airflow = mountWrap(<Airflow {...props} dagSize="10" />)
    triangle = mountWrap(<Triangle {...props} />)
  })

  it('should be defined', () => {
    expect(Icon).toBeDefined()
    expect(Logo).toBeDefined()
    expect(Avatar).toBeDefined()
    expect(Airflow).toBeDefined()
    expect(Triangle).toBeDefined()
  })

  it('should render correctly', () => {
    expect(icon).toMatchSnapshot()
    expect(logo).toMatchSnapshot()
    expect(avatar).toMatchSnapshot()
    expect(airflow).toMatchSnapshot()
    expect(triangle).toMatchSnapshot()
  })

  it('logo renders full', () => {
    const diffLogo = mountWrap(<Logo full={true} {...logoProps} />)
    expect(diffLogo).toMatchSnapshot()
  })

  it('logo renders darkBg', () => {
    const diffLogo = mountWrap(<Logo darkBg={true} {...logoProps} />)
    expect(diffLogo).toMatchSnapshot()
  })

  it('logo renders stars', () => {
    const diffLogo = mountWrap(<Logo stars={true} {...logoProps} />)
    expect(diffLogo).toMatchSnapshot()
  })

  it('logo defaults to /', () => {
    const diffLogo = mountWrap(<Logo />)
    expect(diffLogo).toMatchSnapshot()
  })

  it('logo returns null if no image', () => {
    const diffLogo = mountWrap(<Logo />)
    diffLogo.setState({ Img: null })
    expect(diffLogo).toMatchSnapshot()
  })

  it('avatar should check for url and load image', () => {
    const conditionalIcon = avatar.find(Icon).length
    expect(conditionalIcon).toBe(0)
  })

  it('avatar should check for url and load icon', () => {
    const avatarNoIcon = mountWrap(<Avatar {...avatarIconProps} />)
    const conditionalIcon = avatarNoIcon.find(Icon).length
    expect(conditionalIcon).toBe(1)
  })
})
