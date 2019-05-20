import React from 'react'
import { storiesOf } from '@storybook/react'
import { Logo } from 'instruments'

storiesOf('Instruments|Icons.Logo', module)
  .add('Default', () => <Logo />)
  .add('Dark BG', () => <Logo darkBg={true} />)
  .add('Full', () => <Logo full={true} />)
  .add('Full Dark BG', () => <Logo full={true} darkBg={true} />)
  .add('No Stars', () => <Logo noStars={true} />)
  .add('No Stars Dark BG', () => <Logo noStars={true} darkBg={true} />)
