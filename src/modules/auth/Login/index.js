import React from 'react'
import { H1, H4, Link, Logo } from 'instruments'
import Layout from '../Layout'
import s from './styles.scss'

const Login = () => {
  return (
    <Layout title="Login" className={s.login}>
      <Logo noStars={true} darkBg={false} className={s.logo} />
      <H1>Welcome Back</H1>
      <H4>
        Learn&nbsp;
        <Link to="https://www.astronomer.io/guides">
          best practices for using Airflow
        </Link>
        &nbsp;in Astronomer's Guides.
      </H4>
    </Layout>
  )
}

export default Login
