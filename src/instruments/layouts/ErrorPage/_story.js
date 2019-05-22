import React from 'react'
import { storiesOf } from '@storybook/react'
import { ErrorPage } from 'instruments'

storiesOf('Instruments|Layouts', module).add('ErrorPage', () => (
  <ErrorPage>
    <div>[children]</div>
  </ErrorPage>
))
