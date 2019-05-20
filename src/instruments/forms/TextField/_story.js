import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextField, FormLabel } from 'instruments'

storiesOf('Instruments|Forms.TextField', module)
  .add('Default', () => (
    <TextField
      placeholder="TextField placeholder"
      name="mock"
      onChange={() => null}
      onBlur={() => null}
      validate={() => null}
      label={<FormLabel>TextField Label</FormLabel>}
      value=""
      title="TextField Title"
      fieldId="mock"
      updateErrors={() => null}
      setRef={() => null}
    />
  ))
  .add('Required', () => (
    <TextField
      placeholder="TextField placeholder"
      name="mock"
      onChange={() => null}
      onBlur={() => null}
      validate={() => null}
      label={<FormLabel>TextField Label</FormLabel>}
      value=""
      title="TextField Title"
      fieldId="mock"
      updateErrors={() => null}
      setRef={() => null}
      required
    />
  ))
