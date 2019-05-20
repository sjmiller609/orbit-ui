import React from 'react'
import { storiesOf } from '@storybook/react'
import { Password } from 'instruments'

storiesOf('Instruments|Forms.Password', module).add('Default', () => (
  <Password updateErrors={() => null} />
))
