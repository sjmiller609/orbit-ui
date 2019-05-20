import React from 'react'
import { storiesOf } from '@storybook/react'
import { Search } from 'instruments'

storiesOf('Instruments|Forms.Search', module)
  .add('Default', () => (
    <Search
      search={() => null}
      text="Search"
      placeholder="Type to search"
      updateErrors={() => null}
    />
  ))
  .add('Dark', () => (
    <Search
      search={() => null}
      text="Search"
      placeholder="Type to search"
      updateErrors={() => null}
      dark={true}
    />
  ))
