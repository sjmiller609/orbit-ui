import React from 'react'
import { H1, H4, Link, Card } from 'instruments'
import Module from '../Module'
import AuthServices from '../AuthServices'

import s from './styles.scss'

const Login = () => {
  return (
    <Module metaTitle="Login">
      <Card>
        <div className={s.content}>
          <H1>Welcome Back</H1>
          <H4>
            Learn&nbsp;
            <Link to="https://www.astronomer.io/guides">
              best practices for using Airflow
            </Link>&nbsp;in Astronomer's Guides.
          </H4>
          <AuthServices login />
        </div>
      </Card>
    </Module>
  )
}

export default Login
