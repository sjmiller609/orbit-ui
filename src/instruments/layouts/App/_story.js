import React from 'react'
import { storiesOf } from '@storybook/react'
import { App } from 'instruments'

storiesOf('Instruments|Layouts.App', module)
  .add('Default', () => (
    <App nav={<div>Nav Element</div>} metaTitle="Mock Meta Title">
      [children]
    </App>
  ))
  .add('Full Height', () => (
    <App nav={<div>Nav Element</div>} metaTitle="Mock Meta Title" fullHeight>
      [children]
    </App>
  ))
