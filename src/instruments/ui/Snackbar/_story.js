import React from 'react'
import { storiesOf } from '@storybook/react'
import { Snackbar } from 'instruments'

storiesOf('Instruments|UI', module).add('Snackbar', () => (
  <Snackbar msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
))
