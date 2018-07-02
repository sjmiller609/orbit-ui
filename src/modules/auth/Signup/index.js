import React from 'react'
import { H1, H4, Card } from 'instruments'
import Module from '../Module'
import AuthServices from '../AuthServices'
import s from './styles.scss'

const Signup = () => {
  return (
    <Module metaTitle="Sign Up">
      <Card>
        <div className={s.content}>
          <H1>Welcome to Astronomer</H1>
          <H4>Automate data pipelines with Apache Airflow in minutes.</H4>
          <AuthServices />
        </div>
      </Card>
    </Module>
  )
}

export default Signup
