import React from 'react'
import { Page, Box, H1, H4, TextButton } from 'instruments'

import astronaut from './astronaut.svg'

import s from './styles.scss'

const NoMatch = () => {
  return (
    <Page metaTitle="Page not found | Astronomer">
      <Box full className={s.noMatch}>
        <img src={astronaut} className={s.img} title="Page not found" />
        <H1>Oh snap!</H1>
        <H4>There's nothing out here...</H4>
        <TextButton to="/" backArrow="arrow">
          Return Home
        </TextButton>
      </Box>
    </Page>
  )
}

export default NoMatch
