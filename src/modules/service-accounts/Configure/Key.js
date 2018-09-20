import React from 'react'
import PropTypes from 'prop-types'

import { CardForm, Code, H5, SetUI } from 'instruments'
import copy from 'copy-to-clipboard'
import s from './styles.scss'

class Key extends React.Component {
  copied = this.copied.bind(this)

  copied() {
    copy(this.props.apiKey)
    this.props.setUI.snackbar('API Key copied to clipboard')
  }
  render() {
    const { apiKey } = this.props
    let button
    let text =
      'This API Key is locked for security. If you need access to a key, please create a new service account.'
    if (!~apiKey.indexOf('********')) {
      button = {
        onClick: this.copied,
        text: 'Copy to Clipboard',
        save: true,
      }
      text = 'This API key will only be visible during this session:'
    }
    return (
      <CardForm title="API Key" id="apiKey" button={button}>
        <H5>{text}</H5>
        <Code className={s.code}>{apiKey}</Code>
      </CardForm>
    )
  }
}

Key.propTypes = {
  apiKey: PropTypes.string,
  setUI: PropTypes.object,
}

export default SetUI(Key, { snackbar: true })
