import React from 'react'
import { storiesOf } from '@storybook/react'
import { P } from 'instruments'

storiesOf('Instruments|Text', module).add('P', () => (
  <P>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt ipsum
    lacus, nec mollis arcu vulputate eget. Vestibulum est libero, finibus
    commodo dictum vel, faucibus euismod neque. Quisque ullamcorper nibh nec
    scelerisque aliquam. Proin eros dolor, pretium vel efficitur sed, dictum in
    lorem.{' '}
  </P>
))
