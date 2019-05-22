import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { CardForm } from 'instruments'

const form = {
  save: () => null,
  field: {},
}

storiesOf('Instruments|Cards.Form', module)
  .addDecorator(withKnobs)
  .add('No props', () => <CardForm />)
  .add('w/ props', () => (
    <CardForm
      title={text('Title', 'Configure Alerts')}
      button={{
        save: form.save,
        text: text('Button Text', 'Save'),
      }}
    />
  ))
