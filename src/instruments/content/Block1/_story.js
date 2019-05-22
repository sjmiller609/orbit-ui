import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Block1, P } from 'instruments'

storiesOf('Instruments|Content.Block1', module)
  .addDecorator(withKnobs)
  .add('No props', () => <Block1 />)
  .add('w/ props', () => (
    <Block1
      title={text('Title', 'Mock Title')}
      text={text('Text', 'String of mock text')}>
      <P>
        {text('Child Text', 'String of mock text located in the child prop')}
      </P>
    </Block1>
  ))
  .add('w/ left prop', () => (
    <Block1
      left={<P>Left column</P>}
      title={text('Title', 'Mock Title')}
      text={text('Text', 'String of mock text')}>
      <P>
        {text('Child Text', 'String of mock text located in the child prop')}
      </P>
    </Block1>
  ))
  .add('w/ right prop', () => (
    <Block1
      right={<P>Right column</P>}
      title={text('Title', 'Mock Title')}
      text={text('Text', 'String of mock text')}>
      <P>
        {text('Child Text', 'String of mock text located in the child prop')}
      </P>
    </Block1>
  ))
