import React from 'react'
import { storiesOf } from '@storybook/react'
import { ShowDate } from 'instruments'

storiesOf('Instruments|Text', module).add('ShowDate', () => (
  <ShowDate date={new Date()} />
))
