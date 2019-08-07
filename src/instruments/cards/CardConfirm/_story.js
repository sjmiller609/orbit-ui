import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { CardConfirm, Link, B } from 'instruments'

storiesOf('Instruments|Cards.Confirm', module)
  .addDecorator(withKnobs)
  .add('No props', () => <CardConfirm />)
  .add('w/ props', () => (
    <CardConfirm
      title={text('Title', 'Upgrade Available!')}
      buttonText={text('Button Text', 'Upgrade')}
      id={text('id', 'upgrade')}>
      <span>
        You are currently running Astronomer <B>v0.0</B>, and the latest version
        is <B>v0.1</B>. For more information on this upgrade{' '}
        <Link onClick={action('clicked', 'More information clicked')}>
          click here
        </Link>
        .
      </span>
    </CardConfirm>
  ))
