import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextFieldSelect, FormLabel } from 'instruments'

const options = ['One', 'Two', 'Three']

storiesOf('Instruments|Forms.TextFieldSelect', module).add('Default', () => (
  <TextFieldSelect
    placeholder="Placeholder"
    name="mock"
    onChange={() => null}
    onBlur={() => null}
    validate={() => null}
    label={<FormLabel>Label</FormLabel>}
    value=""
    title="Title"
    fieldId="mock"
    options={options}
    updateErrors={() => null}
    setRef={() => null}
  />
))
