import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { SiteHeader, P, Link } from 'instruments'
import s from './styles.scss'

const ToSignup = () => (
  <P className={s.switch}>
    New to Astronomer? <Link to="/signup">Sign Up</Link>
  </P>
)
const ToLogin = () => (
  <P className={s.switch}>
    Already have an account? <Link to="/login">Login</Link>
  </P>
)
const BackToLogin = () => (
  <P className={s.switch}>
    Back to <Link to="/login">Login</Link>
  </P>
)

const Nav = () => {
  return (
    <SiteHeader>
      <Switch>
        <Route path="/login" component={ToSignup} exact />
        <Route path="/(|signup)" component={ToLogin} exact />
        <Route path="/(forgot|reset)-password" component={BackToLogin} exact />
      </Switch>
    </SiteHeader>
  )
}

export default Nav
