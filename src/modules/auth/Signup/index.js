import React from 'react'
import { Box, H1, H4, OauthButton, Card } from 'instruments'
import Module from '../Module'
import s from './styles.scss'

const Signup = () => {
  return (
    <Module metaTitle="Sign Up">
      <Card>
        <H1>Welcome to Astronomer</H1>
        <H4>
          Sign up and automate data pipelines with Apache Airflow in minutes.
        </H4>
        <OauthButton service="google" />
      </Card>
    </Module>
  )
}

export default Signup
