import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from 'instruments'

const profile = {
  platform: self.isAdmin,
}

const level1 = {
  selected: {
    to: '#',
    id: '123',
    text: 'Workspace Label',
  },
  list: [],
  addNew: {
    to: '/workspaces/new',
    text: 'New Workspace',
  },
}

const level2 = {
  selected: {
    to: '#',
    id: '123',
    text: 'Workspace Label',
  },
  list: [],
  addNew: {
    to: '/workspaces/new',
    text: 'New Workspace',
  },
}

storiesOf('Instruments|Layouts', module).add('Header', () => (
  <Header level1={level1} level2={level2} profile={profile} subMenu={[]} />
))
