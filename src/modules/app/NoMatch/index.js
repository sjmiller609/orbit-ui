import React from 'react'
import PropTypes from 'prop-types'

import { Page, Box, H1, H4, TextButton } from 'instruments'

import astronaut from './astronaut.svg'

import s from './styles.scss'

const NoMatch = ({ location }) => {
  const path = location.pathname
  let title = 'Page not found'
  let msg = "There's nothing out here..."
  if (path === '/500' || path === '/503') {
    title = 'Internal server error'
    msg = 'Something went wrong. Paging Houston...'
  } else if (path === '/houston-down') {
    title = 'Houston is down'
    msg = "The network's down..."
  }
  return (
    <Page metaTitle={title + ' | Astronomer'}>
      <Box full className={s.noMatch}>
        <img src={astronaut} className={s.img} title={title} />
        <H1>Oh snap!</H1>
        <H4>{msg}</H4>
        <TextButton to="/" backArrow="arrow">
          Return Home
        </TextButton>
      </Box>
    </Page>
  )
}

NoMatch.propTypes = {
  location: PropTypes.object,
}

export default NoMatch
