import React from 'react'
import { storiesOf } from '@storybook/react'
import { Site } from 'instruments'

storiesOf('Instruments|Layouts', module).add('Site', () => (
  <Site nav={<div>[nav element]</div>}>[children]</Site>
))
