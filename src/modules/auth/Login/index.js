import React from 'react'
import { H1, H4, Link } from 'instruments'
import Layout from '../Layout'

const Login = () => {
  return (
    <Layout title="Login">
      <H1>Welcome Back</H1>
      <H4>
        Learn&nbsp;
        <Link to="https://www.astronomer.io/guides">
          best practices for using Airflow
        </Link>&nbsp;in Astronomer's Guides.
      </H4>
    </Layout>
  )
}

export default Login
