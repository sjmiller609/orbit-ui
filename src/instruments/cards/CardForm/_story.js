import React from 'react'
import { storiesOf } from '@storybook/react'
import { CardForm } from 'instruments'

storiesOf('Form Card', module)
  .add('Default', () => <CardForm />)
  .add('Small', () => <CardForm smallForm />)
