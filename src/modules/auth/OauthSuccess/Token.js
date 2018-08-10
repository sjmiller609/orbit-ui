import React from 'react'
import PropTypes from 'prop-types'

import { SetUI, H4, CardForm, Code } from 'instruments'
import Module from '../Module'
import s from './styles.scss'
import auth from 'helpers/token'
import copy from 'copy-to-clipboard'

class Token extends React.Component {
  copied = this.copied.bind(this)
  token = this.props.token || auth.get().token
  copied() {
    copy(this.token)
    this.props.setUI.snackbar('Token copied to clipboard')
  }
  render() {
    return (
      <Module metaTitle="Login Token">
        <CardForm
          title="Login Token"
          button={{
            onClick: this.copied,
            text: 'Copy to Clipboard',
            save: true,
          }}>
          <H4>Use the following token to login with the CLI:</H4>
          <Code className={s.code}>{this.token}</Code>
        </CardForm>
      </Module>
    )
  }
}

Token.propTypes = {
  token: PropTypes.string,
  setUI: PropTypes.object,
}

export default SetUI(Token, { snackbar: true })
