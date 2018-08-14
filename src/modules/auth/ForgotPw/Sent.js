import React from 'react'

import { Card, Mini, Block1, Icon } from 'instruments'
import Module from '../Module'
import s from './styles.scss'

const Sent = () => {
  return (
    <Module title="Password Reset Email Sent">
      <Card title="Check your email">
        <Block1
          left={<Icon icon="rocket-group" className={s.rocket} />}
          title="Check your email"
          text="We just sent you a link to reset your password.">
          <Mini className={s.footer}>
            Hint: If for some reason, you don't see an email from us, check your
            spam folder.
          </Mini>
        </Block1>
      </Card>
    </Module>
  )
}

export default Sent
