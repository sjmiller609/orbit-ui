import React from 'react'
import { Site, Icon, SiteHeader, Mini, Block1 } from 'instruments'
import s from './styles.scss'

const Confirm = () => {
  return (
    <Site
      nav={<SiteHeader />}
      title="Confirm your Account"
      className={s.confirm}>
      <Block1
        left={<Icon icon="rocket-group" className={s.rocket} />}
        title="Check your email"
        text="We need to confirm your account. Please check for an email from us
      with a confirmation link.">
        <Mini className={s.footer}>
          Hint: If for some reason, you don't see an email from us, check your
          spam folder.
        </Mini>
      </Block1>
    </Site>
  )
}

export default Confirm
