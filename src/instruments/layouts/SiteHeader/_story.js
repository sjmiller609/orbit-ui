import React from 'react'
import { storiesOf } from '@storybook/react'
import { SiteHeader } from 'instruments'

storiesOf('Instruments|Layouts.SiteHeader', module)
  .add('Default', () => <SiteHeader>[children]</SiteHeader>)
  .add('Dark', () => <SiteHeader dark={true}>[children]</SiteHeader>)
