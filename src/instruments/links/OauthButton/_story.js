import React from 'react'
import { storiesOf } from '@storybook/react'
import OAuthButton from './'

storiesOf('Instruments|Links', module).add('OAuthButton', () => (
  <OAuthButton>Mock link</OAuthButton>
))
