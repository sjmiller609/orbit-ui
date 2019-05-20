import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { CardDelete, B } from 'instruments'

storiesOf('Instruments|Cards.Delete', module)
  .addDecorator(withKnobs)
  .add('No props', () => <CardDelete />)
  .add('w/ props', () => (
    <CardDelete
      title={text('Title', 'Deprovision Deployment')}
      text={text(
        'Text',
        'Warning! This cannot be undone. Your webserver, scheduler, database, and deploys will all be deleted, and you will lose all connections configured in Airflow.'
      )}
      buttonText={text('Button Text', 'Upgrade')}
      id={text('id', 'upgrade')}>
      <span>
        Are you sure you want to deprovision deployment&nbsp;
        <B>Deployment Label</B>?
      </span>
    </CardDelete>
  ))
