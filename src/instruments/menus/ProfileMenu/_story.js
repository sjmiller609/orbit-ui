import React from 'react'
import { storiesOf } from '@storybook/react'
import { ProfileMenu } from 'instruments'

storiesOf('Instruments|Menus', module).add('ProfileMenu', () => (
  <ProfileMenu name="John Doe" avatar="null" platform={true} />
))
