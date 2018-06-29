import React from 'react'
import { H1, H4, Link, OauthButton, Card } from 'instruments'
import Module from '../Module'
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
          <OauthButton service="google" login />
        </div>
      </Card>
    </Module>
  )
}

export default Login
