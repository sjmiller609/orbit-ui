import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Card, Mini, Block1 } from 'instruments'

const headerText = 'Check your email'

storiesOf('Instruments|Cards.Default', module)
  .addDecorator(withKnobs)
  .add('No props', () => <Card />)
  .add('w/ props', () => (
    <Card header={text('Header Text', headerText)}>
      <Block1
        title="Check your email"
        text="We just sent you a link to reset your password.">
        <Mini>
          Hint: If for some reason, you don't see an email from us, check your
          spam folder.
        </Mini>
      </Block1>
    </Card>
  ))
