import React from 'react'
import PropTypes from 'prop-types'
import { H1, H4, Icon } from 'instruments'
import Layout from '../Layout'
import s from './styles.scss'

const Signup = ({ location }) => {
  const title = location.pathname === '/signup' ? 'Sign Up' : null
  return (
    <Layout title={title} className={s.signup}>
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

Signup.propTypes = {
  location: PropTypes.object,
}

export default Signup
