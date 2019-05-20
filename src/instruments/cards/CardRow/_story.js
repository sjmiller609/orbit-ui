import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'
import { CardRow } from 'instruments'

storiesOf('Instruments|Cards.Row', module)
  .addDecorator(withKnobs)
  .add('No props', () => <CardRow />)
  .add('w/ props', () => (
    <CardRow children={object('Row Items', ['One', 'Two', 'Three'])} />
  ))
