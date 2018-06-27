import React from 'react'
import { H1, H4, OauthButton, Card } from 'instruments'
import Module from '../Module'
import s from './styles.scss'

const Signup = () => {
  return (
    <Module metaTitle="Sign Up">
      <Card>
        <div className={s.content}>
          <H1>Welcome to Astronomer</H1>
          <H4>Automate data pipelines with Apache Airflow in minutes.</H4>
          <OauthButton service="google" />
        </div>
      </Card>
    </Module>
  )
}

export default Signup
