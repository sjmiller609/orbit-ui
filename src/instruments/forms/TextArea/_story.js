import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextArea, FormLabel } from 'instruments'

storiesOf('Instruments|Forms.TextArea', module)
  .add('Default', () => (
    <TextArea
      placeholder="Textarea placeholder"
      name="mock"
      onChange={() => null}
      onBlur={() => null}
      validate={() => null}
      label={<FormLabel>TextArea Label</FormLabel>}
      value=""
      title="TextArea Title"
      fieldId="mock"
      updateErrors={() => null}
      setRef={() => null}
    />
  ))
  .add('Required', () => (
    <TextArea
      placeholder="Textarea placeholder"
      name="mock"
      onChange={() => null}
      onBlur={() => null}
      validate={() => null}
      label={<FormLabel>TextArea Label</FormLabel>}
      value=""
      title="TextArea Title"
      fieldId="mock"
      updateErrors={() => null}
      setRef={() => null}
      required
    />
  ))
