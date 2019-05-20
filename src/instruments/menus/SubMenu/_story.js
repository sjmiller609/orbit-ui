import React from 'react'
import { storiesOf } from '@storybook/react'
import { SubMenu } from 'instruments'

storiesOf('Instruments|Menus', module).add('SubMenu', () => (
  <SubMenu
    menu={[
      {
        to: '#',
        text: 'One',
        back: '#',
        exact: '/',
        active: true,
      },
      {
        to: '#',
        text: 'Two',
        back: '#',
        exact: '/',
        active: false,
      },
      {
        to: '#',
        text: 'Three',
        back: '#',
        exact: '/',
        active: false,
      },
    ]}
  />
))
