import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from 'instruments'

storiesOf('Instruments|Forms.Checkbox', module)
  .add('Default', () => (
    <Checkbox
      id="mockCheckbox"
      name="mockCheckbox"
      onChange={() => null}
      onBlur={() => null}
      updateErrors={() => null}
      setRef={() => null}
      label="Mock checkbox"
      value="mockCheckbox"
    />
  ))
  .add('Required', () => (
    <Checkbox
      id="mockCheckbox"
      name="mockCheckbox"
      onChange={() => null}
      onBlur={() => null}
      updateErrors={() => null}
      setRef={() => null}
      label="Mock checkbox"
      value="mockCheckbox"
      require={true}
    />
  ))
