import React from 'react'
import { storiesOf } from '@storybook/react'
import { Dialog } from 'instruments'

storiesOf('Instruments|UI', module).add('Dialog', () => (
  <Dialog
    title="Dialog"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt ipsum lacus."
  />
))
