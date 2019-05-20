import React from 'react'
import { storiesOf } from '@storybook/react'
import { FieldSet } from 'instruments'

storiesOf('Instruments|Forms.FieldSet', module).add('Default', () => (
  <FieldSet name="mock" onChange={() => null} updateErrors={() => null} />
))
