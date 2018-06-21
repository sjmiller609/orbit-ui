import React from 'react'
import { CardError } from '../../../instruments'
import { Helmet } from 'react-helmet'

//import s from './styles.scss'
const NoMatch = () => {
  return (
    <React.Fragment>
      <CardError full />
      <Helmet>
        <title>Page not found | Astronomer</title>
      </Helmet>
    </React.Fragment>
  )
}

export default NoMatch
