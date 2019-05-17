import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { Card } from 'instruments'

const stories = storiesOf('Cards', module)

stories.addDecorator(withKnobs)
stories.add('Default', () => <Card header={text('Footer', 'Test Header')} />)
