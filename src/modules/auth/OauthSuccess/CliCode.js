import React from 'react'
import PropTypes from 'prop-types'

import { H1, H4, Card, Code } from 'instruments'
import Module from '../Module'
import s from './styles.scss'
import auth from 'helpers/token'

const CliCode = ({ code }) => {
  console.log(auth)
  return (
    <Module metaTitle="CLI OAuth Code">
      <Card>
        <div className={s.content}>
          <H1>OAuth Successful</H1>
          <H4>Use the following code to login with the CLI:</H4>
          <Code className={s.code}>{code}</Code>
        </div>
      </Card>
    </Module>
  )
}

CliCode.propTypes = {
  code: PropTypes.string,
}

export default CliCode
