import React from 'react'
import { storiesOf } from '@storybook/react'
import { Backdrop } from 'instruments'

storiesOf('Instruments|UI', module).add('Backdrop', () => (
  <Backdrop show={true} />
))
