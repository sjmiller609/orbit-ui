import React from 'react'
import { storiesOf } from '@storybook/react'
import { NumberField, P } from 'instruments'

storiesOf('Instruments|Forms.NumberField', module)
  .add('Default', () => (
    <NumberField
      placeholder="mock"
      id="123"
      name="mock"
      onChange={e => e}
      updateErrors={e => e}
      required={true}
      focus={false}
      label={<P>Label</P>}
      value={5}
      title="Mock"
      error={<P>Error text</P>}
      min={1}
      max={10}
      fieldId="mock"
    />
  ))
  .add('Units', () => (
    <NumberField
      placeholder="mock"
      name="mock"
      onChange={e => e}
      updateErrors={e => e}
      id="123"
      required={true}
      focus={false}
      label={<P>Label</P>}
      value={5}
      title="Mock"
      error={<P>Error text</P>}
      min={1}
      max={10}
      fieldId="mock"
      units="mbps"
    />
  ))
  .add('Slider', () => (
    <NumberField
      placeholder="mock"
      name="mock"
      onChange={e => e}
      updateErrors={e => e}
      id="123"
      required={true}
      focus={false}
      label={<P>Label</P>}
      value={5}
      title="Mock"
      error={<P>Error text</P>}
      min={1}
      max={10}
      fieldId="mock"
      slider={true}
      units="mbps"
    />
  ))
