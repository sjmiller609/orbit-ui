import React from 'react'
import { storiesOf } from '@storybook/react'
import { FormSection } from 'instruments'

storiesOf('Instruments|Forms.FormSection', module).add('Default', () => (
  <FormSection
    title="Mock Form Section"
    text="Mock description for this section">
    [Replace with form parts]
  </FormSection>
))
