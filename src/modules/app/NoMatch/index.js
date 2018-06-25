import React from 'react'
import { Box, H1, H4, TextButton } from 'instruments'
import { Helmet } from 'react-helmet'

import astronaut from './astronaut.svg'

import s from './styles.scss'

const NoMatch = () => {
  return (
    <Box full className={s.noMatch}>
      <img src={astronaut} className={s.img} title="Page not found" />
      <H1>Oh snap!</H1>
      <H4>There's nothing out here...</H4>
      <TextButton to="/" backArrow>
        Return Home
      </TextButton>
      <Helmet>
        <title>Page not found | Astronomer</title>
      </Helmet>
    </Box>
  )
}

export default NoMatch
