import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from 'instruments'

storiesOf('Instruments|Links.Button', module)
  .add('Default', () => <Button>Mock Button</Button>)
  .add('Small', () => <Button style="small">Mock Button</Button>)
  .add('Disabled', () => <Button disabled={true}>Mock Button</Button>)
  .add('Red Orange', () => <Button style="red-orange">Mock Button</Button>)
  .add('Red', () => <Button style="red">Mock Button</Button>)
  .add('Purple', () => <Button style="purple">Mock Button</Button>)
  .add('Beige', () => <Button style="beige">Mock Button</Button>)
  .add('Blue', () => <Button style="blue">Mock Button</Button>)
  .add('Outline', () => <Button style="outline">Mock Button</Button>)
  .add('Blue Outline', () => <Button style="blueOutline">Mock Button</Button>)
  .add('White Outline', () => <Button style="whiteOutline">Mock Button</Button>)
  .add('Arrow', () => <Button style="arrow">Mock Button</Button>)
