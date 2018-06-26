import React from 'react'
import { Page, Box, H1, H4, TextButton } from 'instruments'
import s from './styles.scss'

const Signup = () => {
  return (
    <Page metaTitle="Page not found | Astronomer">
      <Box full className={s.noMatch}>
        <H1>Oh snap!</H1>
        <H4>There's nothing out here...</H4>
        <TextButton to="/" backArrow>
          Return Home
        </TextButton>
      </Box>
    </Page>
  )
}

export default Signup
