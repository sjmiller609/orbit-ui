import React from 'react'
import { storiesOf } from '@storybook/react'
import { Form } from 'instruments'

storiesOf('Instruments|Forms.Form', module).add('Default', () => (
  <Form onSubmit={() => null}>Form Children</Form>
))
