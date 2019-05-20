import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { CardError, P } from 'instruments'

storiesOf('Instruments|Cards.Error', module)
  .addDecorator(withKnobs)
  .add('No props', () => <CardError />)
  .add('w/ children', () => (
    <CardError>
      <P>{text('Children Text', 'Probably occured at XYZ')}</P>
    </CardError>
  ))
