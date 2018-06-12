'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import s from './styles.scss'

import { Box, P, CardForm, Backdrop } from '../../../instruments'

const Dialog = ({ title, text, button = {}, close }) => {
  if (!title && !text) return null
  return (
    <Box className={s.dialog} key={`dialog${title}`}>
      <Backdrop show close={close} blur />
      <CardForm
        title={title}
        button={{
          ...button,
          save: true,
          onClick: () => {
            button.onClick()
            close()
          },
        }}
        button2={{
          text: 'Cancel',
          onClick: close,
          style: 'beige',
        }}
        className={s.card}>
        <P>{text}</P>
      </CardForm>
    </Box>
  )
}

Dialog.propTypes = {
  title: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  button: PropTypes.object,
  close: PropTypes.func,
}

export default Dialog
