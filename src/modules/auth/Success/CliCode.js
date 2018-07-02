import React from 'react'
import PropTypes from 'prop-types'

import { H1, H4, H2, Card } from 'instruments'
import Module from '../Module'
import s from './styles.scss'

const CliCode = ({ code }) => {
  return (
    <Module metaTitle="CLI OAuth Code">
      <Card>
        <div className={s.content}>
          <H1>OAuth Successful</H1>
          <H4>Use the following code to login with the CLI:</H4>
          <H2>{code}</H2>
        </div>
      </Card>
    </Module>
  )
}

CliCode.propTypes = {
  code: PropTypes.string,
}

export default CliCode
