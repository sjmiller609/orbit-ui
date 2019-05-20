import React from 'react'
import { storiesOf } from '@storybook/react'
import { UnsavedChangesAlert } from 'instruments'

storiesOf('Instruments|Forms.UnsavedChangesAlert', module).add(
  'Default',
  () => <UnsavedChangesAlert alert={true} />
)
