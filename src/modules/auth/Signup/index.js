import React from 'react'
import { H1, H4, Icon } from 'instruments'
import Layout from '../Layout'
import s from './styles.scss'

const Signup = () => {
  return (
    <Layout title="Sign Up" className={s.signup}>
      <H1>Welcome to Astronomer</H1>
      <H4>Automate data pipelines with Apache Airflow in minutes.</H4>
      <ul>
        <div className={s.alien}>
          <Icon icon="alien_ship" />
        </div>
        <li>One-click deployments</li>
        <li>Scale effortlessly</li>
        <li>Developer-friendly tools</li>
      </ul>
    </Layout>
  )
}

export default Signup
