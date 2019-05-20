import React from 'react'
import { storiesOf } from '@storybook/react'
import { Slider } from 'instruments'

storiesOf('Instruments|Forms.Slider', module).add('Default', () => (
  <Slider min={1} max={10} value={5} step={1} onChange={() => null} />
))
